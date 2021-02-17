import { useContext, useState, useEffect, createContext } from 'react';

import { auth } from '../adapters/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, fullName) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        ref.user.updateProfile({
          displayName: fullName,
        });
      })
      .catch((error) => console.error(error));
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
