export const filterRestaurents = (text, allRestaurents) => {
  return allRestaurents.filter((restaurent) =>
    restaurent?.info?.name?.toLowerCase()?.includes(text.toLowerCase())
  );
};
