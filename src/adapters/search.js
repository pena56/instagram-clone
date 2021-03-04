import { db } from './firebase';

export const searchUsers = (searchTerm) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('userProfile')
      .where('username', '>=', searchTerm)
      .where('username', '<=', searchTerm + '\uf8ff')
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
