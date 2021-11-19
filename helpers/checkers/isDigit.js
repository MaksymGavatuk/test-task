export const isDigit = (string) => {
  try {
    Integer.parseInt(string);
    return true;
  } catch (err) {
    return false;
  }
};
