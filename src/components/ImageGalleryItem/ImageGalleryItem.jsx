import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal';

import '../styles.css';

const ImageGalleryItem = ({ item }) => {
  const { webformatURL, tags, largeImageURL } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => setIsModalOpen(true)}
        />
        {isModalOpen && (
          <Modal
            modalImage={largeImageURL}
            closeModal={() => setIsModalOpen(false)}
            alt={tags}
          />
        )}
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
