export const getPersonalisedPost = (postList, followingList, currentUser) => {
  let newPostList = [];

  postList.map((post) => {
    if (post.data().UID == currentUser.displayName) {
      return newPostList.push(post);
    }
    followingList.map((obj) => {
      if (obj.data().following === post.data().UID) {
        return newPostList.push(post);
      }
    });
  });
  return newPostList;
};

export const getExplorePost = (postList, followingList, currentUser) => {
  let newPostList = [];

  postList.map((post) => {
    if (post.data().UID == currentUser.displayName) {
      return;
    }
    for (let i = 0; i < followingList.length; i++) {
      if (followingList[i].data().following === post.data().UID) {
        return;
      }
    }
    return newPostList.push(post);
  });
  console.log(newPostList);
  return newPostList;
};
