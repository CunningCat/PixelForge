import { useCallback, useState } from "react";

//防抖调用,仅限异步操作
export function useAsyncLock() {
  const [locked, setLocked] = useState(false);

  const withLock = useCallback(
    async (fn: () => Promise<void>) => {
      if (locked) return;
      setLocked(true);
      try {
        await fn();
      } finally {
        setLocked(false);
      }
    },
    [locked],
  );

  return { withLock, locked };
}
