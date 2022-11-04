import BeatLoader from 'react-spinners/BeatLoader';

const Loader = () => {
  // const { isLoading } = this.props;
  return (
    <div>
      <BeatLoader
        color={'navy'}
        loading={false}
        // cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
