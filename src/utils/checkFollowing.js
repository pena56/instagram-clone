const CheckFollowing = (uid, followersList) => {
  const status = followersList.find((obj) => obj.data().follower === uid);

  if (status) {
    return true;
  } else {
    return false;
  }
};

export default CheckFollowing;
