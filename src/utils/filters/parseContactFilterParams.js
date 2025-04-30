import { typeList } from '../../constants/contact.js';

const parseIsFavourite = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return undefined;
};

export const parseContactFilterParams = ({ contactType, isFavourite }) => {
  const parsedType = typeList.includes(contactType) ? contactType : undefined;
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
