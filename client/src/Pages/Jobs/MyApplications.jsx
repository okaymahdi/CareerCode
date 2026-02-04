import { Suspense } from 'react';
import { ApplicationsList, ApplicationStats } from '../../Components/Index';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../API/ApplicationsApis';

const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <ApplicationStats />
      <Suspense
        fallback={<span className='loading loading-infinity loading-xl'></span>}
      >
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplications;
