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

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(getContactController));

contactRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

contactRouter.post('/', ctrlWrapper(addContactController));

contactRouter.put('/:id', ctrlWrapper(upsertContactController));

contactRouter.patch('/:id', ctrlWrapper(patchContactController));

contactRouter.delete('/:id', ctrlWrapper(deleteContactController));

export default contactRouter;
