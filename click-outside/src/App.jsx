import * as React from "react";
import "./App.css";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null);
  function handleOpenModal() {
    setIsOpen(true);
  }

  const handleCloseModal = () => {};

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog>
          <button onClick={handleCloseModal}>X</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}
