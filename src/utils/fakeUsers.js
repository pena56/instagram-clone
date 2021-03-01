// import { db, auth } from '../adapters/firebase';

const data = require('../MOCK_DATA.json');

// const signup = (email, password, fullName, username) => {
//   const slug = generateUserSlug(username);
//   let promise = new Promise(function (resolve, reject) {
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((ref) => {
//         ref.user.updateProfile({
//           displayName: slug,
//         });
//         db.collection('userProfile')
//           .doc(slug)
//           .set({
//             id: slug,
//             email,
//             fullName,
//             username,
//             photoURL: '',
//             bio: '',
//             website: '',
//             phone: '',
//           })
//           .then(() => {
//             resolve(slug);
//           });
//       })
//       .catch((error) => reject(error));
//   });

//   return promise;
// };

data.map((user) => console.log(user.phone));
