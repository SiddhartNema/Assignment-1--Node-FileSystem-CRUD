const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  await fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`${fileName} file created`);
  // dont chnage function name
};

const myFileReader = async (fileName) => {
  // write code here
  let data = await fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(data);
  // dont chnage function name
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  await fs.appendFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`new content added in ${fileName} file`);
  // dont chnage function name
};

const myFileDeleter = async (fileName) => {
  // write code here
  await fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`${fileName} file succesfully creted`);
  // dont chnage function name
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
