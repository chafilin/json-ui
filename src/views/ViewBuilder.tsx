import { Data } from "../types";
import { ComponentView } from "./ComponentVeiw";

type ViewBuilderProps = {
  data: Data;
};

export const ViewBuilder = (props: ViewBuilderProps) => {
  const { data } = props;
  const { views } = data;
  return (
    <>
      {views.map((component, index) => {
        return (
          <ComponentView
            component={component}
            key={"root_" + index}
            keyId={"root_" + index}
          />
        );
      })}
    </>
  );
};
