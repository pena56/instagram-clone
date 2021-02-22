const isFileImage = (file) => {
  if (
    file.type === 'image/png' ||
    file.type === 'image/jpg' ||
    file.type === 'image/jpeg'
  ) {
    return true;
  }
  return false;
};

export default isFileImage;
