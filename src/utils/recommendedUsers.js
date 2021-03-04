export const getRecommendedUsers = (followingList, usersList, currentUser) => {
  let newList = [];
  usersList.map((user) => {
    if (user.id === currentUser) {
      return;
    }
    for (let i = 0; i < followingList.length; i++) {
      if (followingList[i].data().following === user.id) {
        return;
      }
    }
    if (newList.length < 5) {
      return newList.push(user);
    } else {
      return;
    }
  });

  return newList;
};
