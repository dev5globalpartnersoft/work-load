import { useMemo } from 'react';
import { Notification } from './index';

// Utils
import { isEmpty } from 'utils/isEmpty';

// Hooks
import { useTranslations } from 'languages';
const { useNotification: useAntNotification } = Notification;

const defConfig = {
  message: '',
  description: '',
  basePath: 'notifications',
  path: '',
  messageInsert: {},
  descriptionInsert: {},
  hideEmpty: false,
};

export const useNotification = (config = defConfig) => {
  const {
    message: baseMessage = '',
    description: baseDescription = '',
    basePath,
    path,
    hideEmpty,
    messageInsert,
    descriptionInsert,
    ...otherConfig
  } = config;

  const t = useTranslations(basePath);
  const [api, contextHolder] = useAntNotification();

  const extendedApi = useMemo(() => {
    let translationsAfterHookCall = {};
    if (baseMessage || baseDescription) {
      translationsAfterHookCall = {
        message: baseMessage,
        description: baseDescription,
      };
    } else {
      if (path) {
        const message = t(`${path}.message`, messageInsert);
        const description = t(`${path}.description`, descriptionInsert);
        if (message || description) {
          translationsAfterHookCall = { message, description };
        }
      }
    }

    const { success, error, info, warning, warn, open, ...apiExtend } = api;

    Object.entries({ success, error, info, warning, warn, open }).forEach(
      ([methodName, method]) => {
        apiExtend[methodName] = ({
          message: paramMessage = '',
          description: paramDescription = '',
          path = '',
          fallbackPath = '',
          messageInsert = {},
          descriptionInsert = {},
          hideEmpty: hideEmptyArg = hideEmpty,
          ...cfgArg
        } = {}) => {
          let translationsDuringMethodCall = translationsAfterHookCall;

          if (paramMessage || paramDescription) {
            translationsDuringMethodCall = {
              message: paramMessage,
              description: paramDescription,
            };
          } else {
            if (path) {
              const message = t(`${path}.message`, messageInsert);
              const description = t(`${path}.description`, descriptionInsert);

              if (message || description) {
                translationsDuringMethodCall = {
                  message,
                  description,
                };
              } else {
                if (fallbackPath) {
                  const fallbackMessage = t(`${fallbackPath}.message`, messageInsert);

                  const fallbackDescription = t(
                    `${fallbackPath}.description`,
                    descriptionInsert
                  );

                  if (fallbackMessage || fallbackDescription) {
                    translationsDuringMethodCall = {
                      message: fallbackMessage,
                      description: fallbackDescription,
                    };
                  }
                }
              }
            }
          }

          if (hideEmptyArg && isEmpty(translationsDuringMethodCall)) {
            return null;
          }

          return method({
            ...otherConfig,
            ...translationsAfterHookCall,
            ...translationsDuringMethodCall,
            ...cfgArg,
          });
        };
      }
    );

    return apiExtend;
  }, [api, t, config]);

  return [extendedApi, contextHolder];
};
