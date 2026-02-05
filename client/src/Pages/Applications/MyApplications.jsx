import { Suspense } from 'react';

import UseAuth from '../../Hooks/UseAuth';

import { ApplicationsList, ApplicationStats } from '../../Components/Index';
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
