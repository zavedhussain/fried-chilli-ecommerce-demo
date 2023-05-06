export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(number / 10);
};

export const getUniqueValues = (allProducts, type) => {
  let uniqueValues = allProducts.map((product) => product[type]);
  if (type === "colors") {
    uniqueValues = uniqueValues.flat();
  }
  return ["all", ...new Set(uniqueValues)];
};
