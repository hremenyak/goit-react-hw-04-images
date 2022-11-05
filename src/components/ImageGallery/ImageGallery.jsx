import '../styles.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
  return (
    <>
      <ul className="ImageGallery">
        {items.map(item => (
          <ImageGalleryItem item={item} key={item.id} openModal={openModal} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
