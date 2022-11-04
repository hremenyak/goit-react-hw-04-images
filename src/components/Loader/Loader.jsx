import BeatLoader from 'react-spinners/BeatLoader';

const Loader = ({ loading }) => {
  return (
    <div>
      <BeatLoader
        color={'navy'}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
