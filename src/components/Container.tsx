import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type ContainerProps = {
  keyId: string;
  children?: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const component = useComponent(props.keyId);
  const [ref, style] = useStyles<HTMLDivElement>(component.style);

  return (
    <div style={style} key={props.keyId} ref={ref}>
      {props.children}
    </div>
  );
};
