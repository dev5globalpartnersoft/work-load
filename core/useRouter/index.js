import { useState, useEffect } from 'react';
import { useRouter as useNextRouter } from 'next/router';

// Utils
import { routerStub } from './routerStub';

export const useRouter = ({ onReady = () => {} } = {}) => {
  const [ready, setReady] = useState(false);
  const nextRouter = useNextRouter();

  useEffect(() => {
    if (nextRouter?.isReady) {
      setReady(true);
      onReady(nextRouter, nextRouter?.query || {});
    }
  }, [nextRouter?.isReady]);

  return ready ? nextRouter : routerStub;
};
