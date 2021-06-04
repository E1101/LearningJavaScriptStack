import React, { useRef } from "react";

export interface ActionFormProps {
  show: boolean;
  isLoading: boolean;
  onSubmit: (text: string) => void;
}

const ActionForm = ({ show, onSubmit, isLoading }: ActionFormProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  if (!show) return null;

  const submit = () => {
    if (inputRef?.current?.value) {
      onSubmit(inputRef.current.value);
    }
  };

  return (
    <div className="ActionForm">
      <textarea disabled={isLoading} ref={inputRef} />
      <br />
      <button disabled={isLoading} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default ActionForm;
