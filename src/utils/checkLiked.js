const checkLiked = (uid, likesList) => {
  const status = likesList.find((obj) => obj.data().userID === uid);

  if (status) {
    return true;
  } else {
    return false;
  }
};

export default checkLiked;
