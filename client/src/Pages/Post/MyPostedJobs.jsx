import { Suspense } from 'react';
import { JobPostList } from '../../Components/Index';
import UseAuth from '../../Hooks/UseAuth';
import { jobsCreatedByPromise } from '../../API/JobsApis';

const MyPostedJobs = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className='text-3xl font-bold mb-4 text-center'>My Posted Jobs :</h2>

      <Suspense
        fallback={<span className='loading loading-infinity loading-xl'></span>}
      >
        <JobPostList jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
