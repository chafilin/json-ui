type TextProps = {
  keyId: string;
  value: string;
  styles: {
    [key: string]: string | number;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const Text = (props: TextProps) => {
  return (
    <p
      style={props.styles}
      key={props.keyId}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.value}
    </p>
  );
};
