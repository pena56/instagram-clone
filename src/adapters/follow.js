import firebase from 'firebase';
import { db } from './firebase';

export const follow = (followerUID, followingUID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('follow')
      .add({
        follower: followerUID,
        following: followingUID,
        date: firebase.firestore.FieldValue.serverTimestamp(),
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

export const unfollow = (followerUID, followingUID) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('follow')
      .where('follower', '==', followerUID)
      .where('following', '==', followingUID)
      .get()
      .then((ref) => {
        ref.docs[0].ref.delete().then(() => {
          resolve('Successfully unfollowed');
        });
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};

export const getFollowing = (uid) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('follow')
      .where('follower', '==', uid)
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

export const getFollowers = (uid) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('follow')
      .where('following', '==', uid)
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
