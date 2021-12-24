// Hooks
import { useMemo } from 'react';
import { useRouter } from 'core/useRouter';

// Utils
import { upFirstChar } from 'utils/upFirstChar';

export const useRouterPathTitle = () => {
  const router = useRouter();
  const { pathname = '' } = router;

  return useMemo(() => {
    const currentPath = pathname.split('/')?.pop() || '';
    return upFirstChar(currentPath);
  }, [pathname]);
};
