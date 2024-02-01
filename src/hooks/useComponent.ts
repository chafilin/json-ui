import { useContext } from "react";
import { ComponentsContext } from "../Context";

export const useComponent = (id: string) => {
  const components = useContext(ComponentsContext);
  return components[id];
};
