import { db } from './firebase';
import firebase from 'firebase';

export const createPost = (user, fileURL, postDesc) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('post')
      .add({
        UID: user.id,
        file: fileURL,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        desc: postDesc,
        userDetails: JSON.stringify(user),
      })
      .then((ref) => {
        resolve(ref);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};

export const getUserPost = (UID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('post')
      .orderBy('date', 'desc')
      .where('UID', '==', UID)
      .get()
      .then((docs) => {
        resolve(docs);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};
