import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type ButtonProps = {
  keyId: string;
};

export const Button = (props: ButtonProps) => {
  const component = useComponent(props.keyId);

  const [ref, style] = useStyles<HTMLButtonElement>(component.style);

  return (
    <button style={style} ref={ref}>
      {component.data?.title}
    </button>
  );
};
