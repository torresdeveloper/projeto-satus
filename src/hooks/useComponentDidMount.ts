"use client";

import { useEffect, useRef } from "react";

export const useComponentDidMount = (callback: () => any) => {
  const ref = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      callback();
      ref.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
