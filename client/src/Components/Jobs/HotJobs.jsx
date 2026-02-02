import { JobCard } from '../Index';

const HotJobs = ({ jobs, totalJobs }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 text-center'>
        Hot Jobs: {totalJobs}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
