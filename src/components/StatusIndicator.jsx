const StatusIndicator = ({ loading, error }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}>
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="mb-3">Oops! Something went wrong</h4>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default StatusIndicator;
