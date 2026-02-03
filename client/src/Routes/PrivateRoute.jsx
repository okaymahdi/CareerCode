import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation();
  console.log(location);
  if (!user) {
    return (
      <Navigate
        to={'/signin'}
        state={location.pathname}
      />
    );
  }
  return children;
};

export default PrivateRoute;
