import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type TextProps = {
  keyId: string;
};

export const Text = (props: TextProps) => {
  const component = useComponent(props.keyId);
  const [ref, style] = useStyles<HTMLParagraphElement>(component.style);

  return (
    <p style={style} key={props.keyId} ref={ref}>
      {component.data?.value || ""}
    </p>
  );
};
