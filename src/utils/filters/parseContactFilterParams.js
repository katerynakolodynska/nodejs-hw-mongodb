import { typeList } from '../../constants/contact.js';

const parseIsFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseContactFilterParams = ({ type, isFavourite }) => {
  const parsedType = typeList.includes(type) ? type : undefined;
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
