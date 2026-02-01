import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Auth } from '../Firebase/Firebase.config';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  /** Google Provider */
  const googleProvider = new GoogleAuthProvider();

  /** Create a New User with Email & Password */
  const createUserWithEP = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  /** Sign In User with Email & Password */
  const signInUserWithEP = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  /** Sign In User with Google */
  const signInUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  /** Sign Out User */
  const signOutUser = () => {
    setLoading(true);
    return signOut(Auth);
  };

  /** Observer */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUserWithEP,
    signInUserWithEP,
    signInUserWithGoogle,
    signOutUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
