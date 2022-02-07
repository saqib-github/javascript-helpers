// readFile as data url
const reader = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });
};
const readFile = (file) => {
  return reader(file).then((result) => {
    return result;
  });
};
export default readFile;

//   import readFile from '../readFile.js';
// use async and await instead
// let file = await readFile(file);
