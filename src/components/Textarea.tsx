import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type TextareaProps = {
  keyId: string;
};

export const Textarea = (props: TextareaProps) => {
  const component = useComponent(props.keyId);
  const [ref, style] = useStyles<HTMLTextAreaElement>(component.style);

  return (
    <textarea
      style={style}
      placeholder={component.data?.placeholder}
      defaultValue={component.data?.value}
      key={props.keyId}
      ref={ref}
    />
  );
};
