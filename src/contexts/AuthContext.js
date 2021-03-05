import { useContext, useState, useEffect, createContext } from 'react';

import { auth, facebookProvider, db } from '../adapters/firebase';
import UploadImage from '../adapters/uploadImage';

import { generateUserSlug } from '../utils/generateSlug';

import LoaderScreen from '../components/LoaderScreen';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password, fullName, username) => {
    const slug = generateUserSlug(username);
    let promise = new Promise(function (resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: slug,
            photoURL:
              'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
          });
          db.collection('userProfile')
            .doc(slug)
            .set({
              id: slug,
              email,
              fullName,
              username,
              photoURL:
                'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
              bio: '',
              website: '',
              phone: '',
            })
            .then(() => {
              resolve(slug);
            });
        })
        .catch((error) => reject(error));
    });

    return promise;
  };

  const signin = (email, password) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
          resolve(ref.user.displayName);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const signout = () => {
    return auth.signOut();
  };

  const passwordReset = (email) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const facebookLogin = () => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithPopup(facebookProvider)
        .then((res) => {
          const slug = generateUserSlug(res.user.displayName);
          const dName = res.user.displayName;
          db.collection('userProfile')
            .doc(dName)
            .get()
            .then((ref) => {
              if (ref.exists) {
                resolve(dName);
              } else {
                res.user.updateProfile({
                  displayName: slug,
                });
                db.collection('userProfile')
                  .doc(slug)
                  .set({
                    id: slug,
                    email: res.user.email,
                    fullName: dName,
                    username: '',
                    photoURL: res.user.photoURL,
                    bio: '',
                    website: '',
                    phone: '',
                  })
                  .then(() => {
                    resolve(slug);
                  });
              }
            });
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  };

  const updateProfileImage = (file) => {
    let promise = new Promise(function (resolve, reject) {
      UploadImage(file).then((url) => {
        auth.currentUser
          .updateProfile({
            photoURL: url,
          })
          .then(() => {
            db.collection('userProfile')
              .doc(auth.currentUser.displayName)
              .update({
                photoURL: url,
              })
              .then(() => {
                resolve('Profile Image Updated');
              })
              .catch((error) => {
                reject(error);
              });
          });
      });
    });

    return promise;
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
    signout,
    passwordReset,
    facebookLogin,
    updateProfileImage,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <LoaderScreen /> : children}
    </AuthContext.Provider>
  );
}
