const JobDetails = () => {
  return (
    <div>
      JobDetails
      {/* Back to Back button */}
      <button
        className='btn btn-primary'
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default JobDetails;
