import { use } from 'react';
import { JobRow } from '../Index';

const ApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);

  return (
    <div>
      <h3 className='text-3xl'>
        Job Applications so Fer: {applications.length}
      </h3>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
