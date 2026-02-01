import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Auth } from '../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  /** Create a New User in Firebase */
  const createUserWithEP = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  /** Sign In User */
  const signInUserWithEP = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const authInfo = {
    loading,
    createUserWithEP,
    signInUserWithEP,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
