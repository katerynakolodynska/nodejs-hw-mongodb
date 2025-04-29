import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getContactController,
  getContactByIdController,
  addContactController,
  upsertContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contact.js';

import { validateBody } from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactUpdateSchema,
} from '../validation/contact.js';

import { isValidID } from '../middlewares/isValidID.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getContactController));

contactRouter.get('/:id', isValidID, ctrlWrapper(getContactByIdController));

contactRouter.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(addContactController),
);

contactRouter.put(
  '/:id',
  isValidID,
  validateBody(contactAddSchema),
  ctrlWrapper(upsertContactController),
);

contactRouter.patch(
  '/:id',
  isValidID,
  validateBody(contactUpdateSchema),
  ctrlWrapper(patchContactController),
);

contactRouter.delete('/:id', isValidID, ctrlWrapper(deleteContactController));

export default contactRouter;
