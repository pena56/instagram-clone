import { db } from './firebase';
import firebase from 'firebase';
import { getUserProfile } from './getProfile';

export const createPost = (user, fileURL, postDesc) => {
  let promise = new Promise(function (resolve, reject) {
    getUserProfile(user.displayName).then((snapshot) => {
      db.collection('post')
        .add({
          UID: snapshot.data().id,
          file: fileURL,
          date: firebase.firestore.FieldValue.serverTimestamp(),
          desc: postDesc,
          userDetails: JSON.stringify(snapshot.data()),
        })
        .then((ref) => {
          resolve(ref);
        })
        .catch((error) => {
          reject(error);
        });
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

export const getAllPost = () => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('post')
      .orderBy('date', 'desc')
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
