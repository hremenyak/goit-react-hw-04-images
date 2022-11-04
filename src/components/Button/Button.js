import '../styles.css';
const Button = ({ loadMore }) => {
  return (
    <>
      <button type="button" onClick={loadMore} className="Button">
        Load more
      </button>
    </>
  );
};

export default Button;
