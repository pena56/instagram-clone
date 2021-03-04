import { db } from './firebase';
import firebase from 'firebase';

export const createLike = (postID, userID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('like')
      .add({
        postID: postID,
        userID: userID,
        date: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};

export const getPostLike = (postID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('like')
      .where('postID', '==', postID)
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
