import { useRef, useCallback, useLayoutEffect } from 'react';
export const useSafeDispatch = (unsafeDispatch) => {
  const mountedRef = useRef(false);
  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => (mountedRef.current = false);
  }, []);
  const safeDispatch = useCallback(
    (...args) => {
      if (mountedRef.current) {
        unsafeDispatch(...args);
      }
    },
    [unsafeDispatch]
  );
  return safeDispatch;
};
