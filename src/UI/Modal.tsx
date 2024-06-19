import { useRef, useImperativeHandle, forwardRef } from "react";
import { CustomShowModal, PropsModal } from "../model/data-modal";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef<CustomShowModal, PropsModal>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef?.current?.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-black/75 w-2/6 h-max rounded-md p-4">
      {props.children}
      <form method="dialog" className="mt-4 text-right">
        <button>{props.caption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
