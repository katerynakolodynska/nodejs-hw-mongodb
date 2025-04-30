import Joi from 'joi';
import { typeList } from '../constants/contact.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(3).max(20),
  isFavorite: Joi.boolean(),
  contactType: Joi.string()

    .valid(...typeList)
    .required(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid(...typeList),
});
