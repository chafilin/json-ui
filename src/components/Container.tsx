type ContainerProps = {
  keyId: string;
  styles: {
    [key: string]: string | number;
  };
  children?: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const Container = (props: ContainerProps) => {
  return (
    <div
      style={props.styles}
      key={props.keyId}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.children}
    </div>
  );
};
