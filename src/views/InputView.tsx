import { useState } from "react";
import { Root, TransformedTree } from "../types";
import { transformData } from "../helpers/transformData";

type InputViewProps = {
  setState: (data: TransformedTree) => void;
  initialData: Root;
};

export const InputView = (props: InputViewProps) => {
  const [state, setState] = useState<string>(
    JSON.stringify(props.initialData, null, 2)
  );
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);
    checkJson(e.target.value);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    props.setState(transformData(JSON.parse(state)));
  };

  const checkJson = (json: string) => {
    try {
      JSON.parse(json);
      setIsValid(true);
    } catch (e) {
      setIsValid(false);
    }
  };

  return (
    <div className="layout_textarea_container">
      <textarea
        className="layout_textarea_input"
        value={state}
        onChange={handleChange}
      />
      <div className="layout_textarea_controll">
        {isValid ? "Valid JSON" : "Invalid JSON"}
        <button onClick={handleSubmit} disabled={!isValid}>
          Submit
        </button>
      </div>
    </div>
  );
};
