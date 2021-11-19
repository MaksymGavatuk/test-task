import fs from 'fs';

export const writeFile = (data) => {
  fs.writeFileSync(__dirname + '../../../result.json', data, (err) => {
    console.log(err);
  });
};
