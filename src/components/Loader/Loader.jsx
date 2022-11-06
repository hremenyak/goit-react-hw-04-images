import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
  return (
    <div className="Loader">
      <BeatLoader
        color={'navy'}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
