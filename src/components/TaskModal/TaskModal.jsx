import React, { useRef, useEffect } from "react";

import "./TaskModal.scss";

const TaskModal = ({ name, setOpenModal }) => {
  const ref = useRef(null);

  const handleOutsideClick = (evt) => {
    if (ref.current && evt.target.classList[0] === "modal") {
      setOpenModal(false);
    }
  };

  const handleEscapeClick = (evt) => {
    if (evt.key === "Escape") {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeClick);
    };
  }, []);

  return (
    <div ref={ref} className="modal">
      <div className="modal__wrapper">
        <div className="modal__task">
          <div className="modal__task-title">{name}</div>
          <div className="modal__task-date">Task created on 07 Jun 2019</div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
