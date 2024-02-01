import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type ImgProps = {
  keyId: string;
};

export const Img = (props: ImgProps) => {
  const component = useComponent(props.keyId);
  const [ref, style] = useStyles<HTMLImageElement>(component.style);
  return (
    <img style={style} src={component.value} key={props.keyId} ref={ref} />
  );
};
