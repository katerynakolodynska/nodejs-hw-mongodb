import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidID = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(createHttpError(404, `${id} is not valid a id`));
  }
  next();
};
