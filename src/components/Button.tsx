type ButtonProps = {
  keyId: string;
  title: string;
  styles: {
    [key: string]: string | number;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={props.styles}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.title}
    </button>
  );
};
