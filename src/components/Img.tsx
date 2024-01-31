type ImgProps = {
  keyId: string;
  src: string;
  styles: {
    [key: string]: string | number;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const Img = (props: ImgProps) => {
  return (
    <img
      style={props.styles}
      src={props.src}
      key={props.keyId}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};
