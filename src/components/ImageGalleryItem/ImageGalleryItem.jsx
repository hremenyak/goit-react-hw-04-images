const ImageGalleryItem = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <li className="gallery-item" key={item.url}>
          <img src={items.url} alt={item.name} />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
