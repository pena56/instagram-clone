import slugify from 'slugify';
import generateUniqueId from 'generate-unique-id';

export const generateUserSlug = (name) => {
  const id = generateUniqueId({ length: 4 });
  const slug = slugify(name, { lower: true });
  const userString = slug + ' ' + id;
  const userSlug = slugify(userString);

  return userSlug;
};
