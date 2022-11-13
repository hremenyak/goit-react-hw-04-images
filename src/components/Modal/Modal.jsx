import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import '../styles.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ closeModal, modalImage, alt }) => {
  useEffect(() => {
    const closeByESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByESC);
    return () => {
      window.removeEventListener('keydown', closeByESC);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className="Overlay"
      onClick={e => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="Modal">
        <img src={modalImage} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  modalImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
