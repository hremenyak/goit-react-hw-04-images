import '../styles.css';
const ImageGalleryItem = ({ item, openModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={item.webformatURL}
        alt={item.tags}
        className="ImageGalleryItem-image"
        onClick={() => openModal(item.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
