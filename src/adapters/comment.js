import { db } from './firebase';
import firebase from 'firebase';
import { getUserProfile } from './getProfile';

export const createComment = (postID, userID, comment) => {
  let promise = new Promise(function (resolve, reject) {
    getUserProfile(userID).then((snapshot) => {
      db.collection('comment')
        .add({
          postID: postID,
          userID: snapshot.data().id,
          comment: comment,
          userDetails: JSON.stringify(snapshot.data()),
          date: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((snapshot) => {
          resolve(snapshot);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return promise;
};

export const getPostComment = (postID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('comment')
      .orderBy('date', 'desc')
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
