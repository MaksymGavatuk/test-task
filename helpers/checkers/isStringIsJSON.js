export const isStringIsJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (err) {
    return false;
  }
  return true;
};
