import { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    if (inViewport) {
      setIsMounted(true);
    }
  }, [inViewport]);

  return {
    isMounted,
    myRef,
  };
};

export default useMounted;
