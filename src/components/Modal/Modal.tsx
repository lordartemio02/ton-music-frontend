import { FC, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IModal } from "./Modal.interface";
import "./modalStyles.css";

const Modal: FC<IModal> = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={{ enter: 0, exit: 300 }}
      unmountOnExit
      classNames="modal"
      nodeRef={nodeRef}
    >
      <div className="modal" ref={nodeRef}>
        <div className="modal-content">{children}</div>
      </div>
    </CSSTransition>
  );
};
export default Modal;
