import PropTypes from 'prop-types';

import '../styles.css';
const ImageGalleryItem = ({ item, openModal }) => {
  const { webformatURL, tags, largeImageURL } = item;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
