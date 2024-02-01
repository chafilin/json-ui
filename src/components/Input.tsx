import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type InputProps = {
  keyId: string;
};

export const Input = (props: InputProps) => {
  const component = useComponent(props.keyId);
  const [ref, style] = useStyles<HTMLInputElement>(component.style);

  return (
    <input
      style={style}
      placeholder={component.data?.placeholder}
      defaultValue={component.data?.value}
      key={props.keyId}
      ref={ref}
    />
  );
};
