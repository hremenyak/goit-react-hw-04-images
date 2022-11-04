import '../styles.css';
const ImageGalleryItem = ({ item }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={item.webformatURL}
        alt={item.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
