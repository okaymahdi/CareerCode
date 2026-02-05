import { use } from 'react';
import { Link } from 'react-router';

const JobPostList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 text-center'>
        Jobs Created By You : {jobs.length}
      </h2>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {jobs.map((job, index) => (
              <tr
                key={job._id}
                className='hover:bg-base-300'
              >
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>
                  <Link
                    to={`/applications/${job._id}`}
                    className='btn btn-primary'
                  >
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobPostList;
