import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import '../styles.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  closeByESC = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByESC);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByESC);
  }
  render() {
    const { modalImage, closeModal } = this.props;

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
          <img src={modalImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  modalImage: PropTypes.string,
  closeModal: PropTypes.func,
};
