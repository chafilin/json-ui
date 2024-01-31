export type Styles = {
  webStyle: {
    [key: string]: string | number | undefined;
  };
  actions: {
    onFocus: {
      color?: string;
      backgroundColor?: string;
    };
    onHover: {
      color?: string;
      backgroundColor?: string;
    };
  };
};

type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownValue = {
  group: string;
  options: DropdownOption[];
};

export type DropdownComponent = {
  type: "dropdown";
  data: {
    value: DropdownValue[];
  };
  style: Styles;
};
export type TextComponent = {
  type: "text";
  data: {
    value: string;
  };
  style: Styles;
};

export type TextFieldComponent = {
  type: "textfield";
  data: {
    placeholder: string | null;
    value: string | null;
  };
  style: Styles;
};

export type TextAreaComponent = {
  type: "textarea";
  data: {
    placeholder: string;
    value: string | null;
  };
  style: Styles;
};

export type ButtonComponent = {
  type: "button";
  data: {
    title: string;
  };
  style: Styles;
};

export type ImageComponent = {
  type: "image";
  value: string;
  style: Styles;
};

export type ContainerComponent = {
  type: "container";
  style: Styles;
  children: Component[];
};

export type Component =
  | DropdownComponent
  | TextComponent
  | TextFieldComponent
  | TextAreaComponent
  | ButtonComponent
  | ImageComponent
  | ContainerComponent;

export type Data = {
  views: Component[];
};
