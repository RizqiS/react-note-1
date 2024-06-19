import { useState, useRef, useContext } from "react";
import { CustomValueRef } from "../model/data-input";
import { CustomShowModal } from "../model/data-modal";
import { isValidationForm } from "../model/validation";
import { ProjectValue } from "../model/data-context";
import { NoteContext } from "../store/note-context";
import Modal from "../UI/Modal";
import Input from "../UI/Input";

interface ValidationState {
  istitle: boolean;
  isdescription: boolean;
  isdate: boolean;
}

export default function NewNote() {
  const [validation, setValidation] = useState<ValidationState>({
    istitle: true,
    isdescription: true,
    isdate: true,
  });
  const noteContext = useContext(NoteContext);

  const titleRef = useRef<CustomValueRef>(null);
  const descriptionRef = useRef<CustomValueRef>(null);
  const dateRef = useRef<CustomValueRef>(null);
  const modalRef = useRef<CustomShowModal>(null);

  const handlerSave = (): void => {
    const values: ProjectValue = {
      id: Math.random().toString(),
      title: titleRef?.current?.getValue().title!,
      description: descriptionRef?.current?.getValue().description!,
      date: dateRef?.current?.getValue().date!,
    };

    const isCheckValidation: boolean[] = [
      isValidationForm(values.title),
      isValidationForm(values.description),
      isValidationForm(values.date),
    ];

    setValidation((prevState) => ({
      ...prevState,
      istitle: isCheckValidation[0],
      isdescription: isCheckValidation[1],
      isdate: isCheckValidation[2],
    }));

    if (isCheckValidation.every((v) => v === true)) {
      noteContext.saveProject(values);
    } else {
      modalRef.current?.open();
    }
  };

  return (
    <div className="w-[35rem] mt-16">
      <Modal caption="Okay" ref={modalRef}>
        <h2 className="text-xl font-bold mb-1">Notification</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima doloribus
          consequatur mollitia eum soluta beatae velit dolores vitae quaerat?
        </p>
      </Modal>

      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={noteContext.cancelProject}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handlerSave}>
            Save
          </button>
        </li>
      </menu>

      <section>
        <Input label="Title" ref={titleRef} type="text" />
        {!validation.istitle && (
          <p className="text-red-500">please enter valid title or fill the input</p>
        )}
        <Input textarea label="Description" ref={descriptionRef} rows={5} cols={50} />
        {!validation.isdescription && (
          <p className="text-red-500">please enter valid description or fill the input</p>
        )}
        <Input label="Date" ref={dateRef} type="date" />
        {!validation.isdate && (
          <p className="text-red-500">please enter valid date or fill the input</p>
        )}
      </section>
    </div>
  );
}
