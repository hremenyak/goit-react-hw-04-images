const Modal = ({ item }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={item.link} alt={item.name} />
      </div>
    </div>
  );
};

export default Modal;
