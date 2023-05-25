export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

// export const formatDate = (date) => {
//   return new Intl.DateTimeFormat("en-GB").format(new Date(date));
// };

export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US");
  const [day, month, year] = formattedDate.split("/");
  return `${year}-${day.padStart(2, "0")}-${month.padStart(2, "0")}`;
};
