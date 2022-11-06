import PropTypes from 'prop-types';
import '../styles.css';
const Button = ({ loadMore }) => {
  return (
    <>
      <button type="button" onClick={loadMore} className="LoadMoreButton">
        Load more
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
