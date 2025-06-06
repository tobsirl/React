import * as React from "react";
import "./App.css";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("pointerdown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);
  function handleOpenModal() {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={modalRef}>
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
