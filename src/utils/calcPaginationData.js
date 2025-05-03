export const calcPaginationData = ({ page, perPage, totalItems }) => {
  const totalPage = Math.ceil(totalItems / perPage);
  const hasPrevPage = page > 1;
  const hasNextPage = page < totalPage;

  return {
    page,
    perPage,
    totalPage,
    hasPrevPage,
    hasNextPage,
  };
};
