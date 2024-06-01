import { FC, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import "./modalStyles.css";

const Modal: FC<any> = ({ children, isOpen, handleClose }) => {
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
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}>
        {/* <div className="fixed inset-0 bg-black flex flex-col items-center justify-center transition-all overflow-hidden z-[999] opacity-0 pointer-events-none transform scale-50"></div> */}
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">{children}</div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};
export default Modal;
