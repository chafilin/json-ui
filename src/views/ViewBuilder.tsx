import { useContext } from "react";

import { TreeContext } from "../Context";
import { ComponentView } from "./ComponentView";

export const ViewBuilder = () => {
  const tree = useContext(TreeContext);
  return (
    <>
      {tree?.map((child) => {
        return <ComponentView key={child.id} tree={child} />;
      })}
    </>
  );
};
