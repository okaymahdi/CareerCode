import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Auth } from '../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const createUserWithEP = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const authInfo = {
    loading,
    createUserWithEP,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
