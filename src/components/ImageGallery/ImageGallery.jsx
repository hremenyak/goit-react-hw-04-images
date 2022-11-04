import '../styles.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ items }) => {
  return (
    <ul className="ImageGallery">
      {items.map(item => (
        <ImageGalleryItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
