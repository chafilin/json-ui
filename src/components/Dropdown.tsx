import { DropdownValue } from "../types";

type DropdownProps = {
  values: DropdownValue[];
  keyId: string;
  styles: {
    [key: string]: string | number;
  };
};

export const Dropdown = ({ values, keyId, styles }: DropdownProps) => {
  return (
    <select id={keyId} style={styles}>
      {values.map((value, index) => (
        <DropdownGroup
          key={keyId + "_" + index}
          keyId={keyId + "_" + index}
          options={value.options}
          label={value.group}
        />
      ))}
    </select>
  );
};

type DropdownOptionProps = {
  value: string;
  label: string;
};

const DropdownOption = ({ value, label }: DropdownOptionProps) => {
  return <option value={value}>{label}</option>;
};

type DropdownGroupProps = {
  label: string;
  options: DropdownOptionProps[];
  keyId: string;
};

const DropdownGroup = ({ label, options, keyId }: DropdownGroupProps) => {
  return (
    <optgroup label={label}>
      {options.map((option, idx) => (
        <DropdownOption
          key={keyId + "_" + idx}
          value={option.value}
          label={option.label}
        />
      ))}
    </optgroup>
  );
};
