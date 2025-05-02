import { typeList } from '../../constants/contact.js';

export const parseContactFilterParams = ({ type, isFavourite }) => {
  const parsedType = typeList.includes(type) ? type : undefined;
  return {
    type: parsedType,
    isFavourite,
  };
};
