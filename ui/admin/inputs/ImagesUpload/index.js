import React, { useMemo, useEffect, useState, useCallback } from 'react';

// Styles
import { Wrap, StyledUpload } from './style';

// Hooks
import { useAuthData } from 'someApi/auth/useAuthData';
import { useController } from 'react-hook-form';

// Utils
import isPlainObject from 'is-plain-obj';
import { useCreateAction, useDeleteAction } from 'someApi/admin/crudHooks';
import { getImageFile } from 'someApi/utils/getImageFile';

export const ImagesUpload = props => {
  const {
    table = {},
    name = '',
    rowKey = 'id',
    imgNameKey = 'title',

    action = '',
    method,
    actionGet = action,
    entity = action,
    entityGet = actionGet,
    actionDelete = actionGet,
    entityDelete = actionDelete,

    actionOrder = 'after',
    className = '',
    customRequest: customRequestProp,
    headers: headersProp,
    defaultValue,
    rules,
    maxCount = 1,
    multiple = true,

    plugins = [],
    pluginsProps = {},
  } = props;

  const { firstSelectedRow = {} } = table;
  const { [rowKey]: id } = firstSelectedRow;

  const { mutateAsync: postImage } = useCreateAction({ entity, method });
  const { accessToken = '' } = useAuthData();

  const { mutateAsync: deleteImage } = useDeleteAction();

  const { field: { value: controllerFieldValue, onChange = () => {} } = {} } =
    useController({
      name,
      defaultValue,
      rules,
    });
  const fieldValue = useMemo(
    () =>
      Array.isArray(controllerFieldValue) ? controllerFieldValue : [controllerFieldValue],
    [controllerFieldValue]
  );

  const [stateValue, setStateValue] = useState([]);
  const stateValuesCount = stateValue.length;
  const lastFieldValueIndex = stateValue?.[stateValuesCount - 1]?.originFileObj?.index;

  useEffect(() => {
    (async (fieldValue, imgNameKey, id, entityGet, setStateValue) => {
      const preparedForDelete = fieldValue.reduce((accum, v) => {
        if (typeof v === 'function') {
          const action = v() || {};
          const { type = '', value = {} } = action;
          if (type === 'delete') {
            const { id } = value;
            if (id) {
              accum[id] = id;
            }
          }
        }

        return accum;
      }, {});

      const output = [];

      for (let i = 0; i < fieldValue.length; i++) {
        const imgOrFn = fieldValue[i];

        if (imgOrFn) {
          // The variable stores the action function
          if (typeof imgOrFn === 'function') {
            const actionContent = await imgOrFn();
            const { value, type = '' } = actionContent;
            if (type === 'upload' && value instanceof File) {
              value.uploaded = false;
              value.index = i;
              output.push({ originFileObj: value });
            }
          }

          // The variable stores the object
          if (isPlainObject(imgOrFn)) {
            const { id, [imgNameKey]: imgName } = imgOrFn;

            if (!preparedForDelete[id] && imgName) {
              const imageResponse = await getImageFile(`${entityGet}/${id}/${imgName}`);
              if (imageResponse instanceof File) {
                imageResponse.uploaded = true;
                imageResponse.index = i;
                imageResponse.id = id;
                output.push({ originFileObj: imageResponse });
              }
            }
          }

          // The variable stores the string
          if (typeof imgOrFn === 'string') {
            const imgName = imgOrFn;

            if (!preparedForDelete[id] && imgName) {
              const imageResponse = await getImageFile(`${entityGet}/${imgName}`);
              if (imageResponse instanceof File) {
                imageResponse.uploaded = true;
                imageResponse.index = i;
                imageResponse.id = id;
                output.push({ originFileObj: imageResponse });
              }
            }
          }
        }
      }

      setStateValue(output);
    })(fieldValue || [], imgNameKey, id, entityGet, setStateValue);
  }, [fieldValue, imgNameKey, id, entityGet, setStateValue]);

  const onPreview = useCallback(async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }, []);

  const headers = useMemo(
    () => ({ Authorization: `Bearer ${accessToken}`, ...(headersProp || {}) }),
    [accessToken, headersProp]
  );

  const uploadCallback = useCallback(
    async (file, submitResponse = {}, params = {}) => {
      const { id } = submitResponse;
      const { type = 'all', svgType = type } = params;

      if (id && file instanceof File) {
        const formData = new FormData();
        formData.append('files', file);
        console.log('images upload callback', entity, id);
        return await postImage({
          _body: formData,
          entity: `${entity}/${id}/${svgType}`,
          ...params,
        });
      }
    },
    [entity, postImage]
  );

  const handleChange = useCallback(
    e => {
      const { file, onSuccess = () => {} } = e;
      console.log('file upload custom request', e);

      const uploadActionGetter = () => ({
        actionOrder,
        actionFn: uploadCallback,
        value: file,
        type: 'upload',
      });

      if (stateValuesCount < maxCount) {
        onChange([...(fieldValue || []), uploadActionGetter]);
      } else {
        onChange([
          ...(fieldValue || []).slice(0, lastFieldValueIndex),
          uploadActionGetter,
        ]);
      }

      return onSuccess(file);
    },
    [
      onChange,
      uploadCallback,
      actionOrder,
      fieldValue,
      stateValuesCount,
      lastFieldValueIndex,
    ]
  );

  const deleteCallback = useCallback(
    async (file = {}) => {
      const { name, id } = file;
      console.log('delete callback', file);
      return await deleteImage({ entity: `${entityDelete}/${id}/${name}` });
    },
    [entityDelete, deleteImage, maxCount]
  );

  const handleDelete = useCallback(
    async e => {
      console.log('handle remove file', e);

      const { originFileObj = {} } = e;
      const { uploaded, index } = originFileObj;

      if (uploaded) {
        const deleteActionGetter = () => ({
          actionOrder,
          actionFn: deleteCallback,
          value: originFileObj,
          type: 'delete',
        });

        onChange([deleteActionGetter, ...(fieldValue || [])]);
      } else {
        const valueReplace = fieldValue.filter((v, i) => i !== index);
        onChange(valueReplace);
      }
    },
    [deleteCallback, actionOrder, fieldValue]
  );

  return (
    <Wrap className={className}>
      <StyledUpload
        action={entity}
        customRequest={customRequestProp || handleChange}
        headers={headers}
        listType="picture-card"
        onPreview={onPreview}
        onRemove={handleDelete}
        fileList={stateValue}
        maxCount={maxCount}
        multiple={multiple}
      >
        + Upload
      </StyledUpload>
      {plugins.map((PluginComponent = () => '', index) => {
        return (
          <PluginComponent
            key={index}
            {...props}
            {...{
              stateValue,
              setStateValue,
              fieldValue,
              onChange,
              uploadCallback,
              deleteCallback,
            }}
            {...pluginsProps}
          />
        );
      })}
    </Wrap>
  );
};
