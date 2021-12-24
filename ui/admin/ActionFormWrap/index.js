// Styles
import {
  StyledForm,
  TopWrap,
  ContentWrap,
  BottomWrap,
  Title,
  BackButton,
  SubmitButton,
  CancelButton,
} from 'ui/admin/ActionFormWrap/style';

// Hooks
import { useCallback } from 'react';
import { useUpFirstChar } from 'utils/hooks/useUpFirstChar';

export const ActionFormWrap = ({
  title = '',
  table = {},
  crud = {},
  crudForm = {},
  ...props
}) => {
  const { isActionLoading } = crud;
  const { isSubmitting } = crudForm;
  const isLoading = isActionLoading || isSubmitting;

  const { setMode = () => {}, mode = '', entity = '' } = table;
  const modeTitle = useUpFirstChar(mode);

  const handleBackClick = useCallback(() => setMode('table'), [setMode]);

  return (
    <StyledForm {...props}>
      <TopWrap>
        <Title>{title || `${modeTitle} ${entity}`}</Title>
        <BackButton onClick={handleBackClick} disabled={isActionLoading}>
          x
        </BackButton>
      </TopWrap>
      <ContentWrap>{props.children}</ContentWrap>
      <BottomWrap>
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
        <CancelButton onClick={handleBackClick} disabled={isActionLoading}>
          Cancel
        </CancelButton>
      </BottomWrap>
    </StyledForm>
  );
};
