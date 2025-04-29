import { typeList } from '../../constants/contact.js';

export const parseContactFilterParams = ({ contactType, isFavourite }) => {
  const parsedType = typeList.includes(contactType) ? contactType : undefined;

  return {
    contactType: parsedType,
    isFavourite,
  };
};
