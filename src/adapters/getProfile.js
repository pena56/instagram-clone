import { db } from './firebase';

export const getUserProfile = (uid) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('userProfile')
      .doc(uid)
      .get()
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};

export const updateProfile = (uid, data) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('userProfile')
      .doc(uid)
      .update(data)
      .then(() => {
        resolve('Profile updated successfully');
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};
