type InputProps = {
  keyId: string;
  placeholder: string;
  value: string;
  styles: {
    [key: string]: string | number;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const Input = (props: InputProps) => {
  return (
    <input
      style={props.styles}
      placeholder={props.placeholder}
      defaultValue={props.value}
      key={props.keyId}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};
