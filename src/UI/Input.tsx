import { PropsInput, CustomValueRef } from "../model/data-input";
import { useRef, useImperativeHandle, forwardRef, ForwardRefRenderFunction } from "react";

const InputRefComponent: ForwardRefRenderFunction<CustomValueRef, PropsInput> = (props, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      title: inputRef.current?.value,
      description: textareaRef.current?.value,
      date: inputRef.current?.value,
    }),
  }));

  const classInput =
    "w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:bg-stone-600 focus:text-white my-3";
  let selectedInputContent = <input ref={inputRef} type={props.type} className={classInput} />;
  if (props.textarea) {
    selectedInputContent = (
      <textarea ref={textareaRef} rows={props.rows} cols={props.cols} className={classInput} />
    );
  }

  return (
    <p>
      <label htmlFor={props.label} className="block">
        {props.label}
      </label>
      {selectedInputContent}
    </p>
  );
};

const Input = forwardRef<CustomValueRef, PropsInput>(InputRefComponent);
export default Input;
