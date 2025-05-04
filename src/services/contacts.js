import contactCollection from '../db/models/Contact.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';
import { sortList } from '../constants/index.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = sortList[0],
  filters = {},
}) => {
  const skip = (page - 1) * perPage;

  const contactQuery = contactCollection.find();

  if (filters.userId) {
    contactQuery.where('userId').equals(filters.userId);
  }

  if (typeof filters.isFavourite === 'boolean') {
    contactQuery.where('isFavourite').equals(filters.isFavourite);
  }
  if (filters.type) {
    contactQuery.where('contactType').equals(filters.type);
  }

  const totalItems = await contactCollection
    .find()
    .merge(contactQuery)
    .countDocuments();

  const data = await contactQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const paginationData = calcPaginationData({ page, perPage, totalItems });

  return {
    data,
    page,
    perPage,
    totalItems,
    ...paginationData,
  };
};

export const getContactById = (id) => contactCollection.findOne({ _id: id });

export const addContacts = (payload) => contactCollection.create(payload);

export const updateContacts = async (filter, payload, options = {}) => {
  const { upsert = false } = options;
  const rawResult = await contactCollection.findOneAndUpdate(filter, payload, {
    upsert,
    includeResultMetadata: true,
    returnDocument: 'after',
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject?.upserted),
  };
};

export const deleteContactById = (_id) =>
  contactCollection.findOneAndDelete({ _id });
