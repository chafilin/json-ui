import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
import { Style } from "../types";

export const useStyles = <T extends HTMLElement>(
  styles: Style
): [RefObject<T>, CSSProperties] => {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => {
    setIsHovered(false);
    setIsFocused(false);
  };
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  useEffect(() => {
    const el = ref.current;
    if (ref.current) {
      el?.addEventListener("mouseenter", onMouseEnter);
      el?.addEventListener("mouseleave", onMouseLeave);
      el?.addEventListener("focus", onFocus);
      el?.addEventListener("blur", onBlur);
    }
    return () => {
      if (el) {
        el?.removeEventListener("mouseenter", onMouseEnter);
        el?.removeEventListener("mouseleave", onMouseLeave);
        el?.removeEventListener("focus", onFocus);
        el?.removeEventListener("blur", onBlur);
      }
    };
  }, []);

  const style = {
    ...styles.webStyle,
    ...(isHovered && styles.actions?.onHover),
    ...(isFocused && styles.actions?.onFocus),
  };

  return [ref, style];
};
