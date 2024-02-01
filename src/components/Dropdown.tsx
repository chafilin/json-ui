import { useComponent } from "../hooks/useComponent";
import { useStyles } from "../hooks/useStyles";

type DropdownProps = {
  keyId: string;
};

export const Dropdown = ({ keyId }: DropdownProps) => {
  const component = useComponent(keyId);
  const [ref, style] = useStyles<HTMLSelectElement>(component.style);

  const values = component.data?.options;

  if (!values) {
    return null;
  }

  return (
    <select id={keyId} style={style} ref={ref}>
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
