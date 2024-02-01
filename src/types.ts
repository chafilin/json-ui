export interface Root {
  views: Children[];
}

export interface Style {
  webStyle: WebStyle;
  actions: Actions;
}

export interface WebStyle {
  [key: string]: string | number | undefined;
}

export interface Actions {
  onFocus: OnFocus;
  onHover: OnHover;
}

export interface OnFocus {
  color?: string;
  backgroundColor?: string;
}

export interface OnHover {
  color?: string;
  backgroundColor?: string;
}

export interface Children {
  type: string;
  value?: string;
  style: Style;
  data?: Data;
  children?: Children[];
}

export interface Data {
  placeholder?: string;
  value?: string;
  options?: DropdownValue[];
  title?: string;
}

export interface Option {
  label: string;
  value: string;
}
export interface DropdownValue {
  group: string;
  options: Option[];
}

export type TransformedTree = {
  tree: TransformedView[];
  components: Components;
};

export type TransformedView = {
  id: string;
  type: string;
  children: TransformedView[];
};

export type Components = {
  [key: string]: Component;
};

export type Component = {
  type: string;
  value?: string;
  data?: Data;
  style: Style;
  children?: string[];
};
