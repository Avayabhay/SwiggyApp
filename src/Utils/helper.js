export const filterRestaurents = (text, allRestaurents) => {
  return allRestaurents.filter((restaurent) =>
    restaurent?.data?.name?.toLowerCase()?.includes(text.toLowerCase())
  );
};
