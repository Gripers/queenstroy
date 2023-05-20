import useWindowSize from "./useWindowSize";

export const useIsMobile = (breakpoint = 1200) => {
  const { width } = useWindowSize();

  return width! <= breakpoint ? true : false;
};
