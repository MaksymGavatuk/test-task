import { ConfigProperty } from '../../common';

export const isValidConfig = (config) => {
  return (
    config &&
    Object.keys(ConfigProperty).every((el) => config.hasOwnProperty(el))
  );
};
