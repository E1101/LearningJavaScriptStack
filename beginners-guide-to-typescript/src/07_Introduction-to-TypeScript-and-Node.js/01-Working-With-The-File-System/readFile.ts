import fs from 'fs';

// it's not possible to know the type for the contents of the file at the given path,
// we can use <generics> to allow the user to provide those types when they call the function:
// check app.ts for this function usage
function readFile<Contents extends object>(fileName: string): Promise<Contents> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      const parsedData = JSON.parse(data);

      if (err) {
        reject(err);
      } else {
        resolve(parsedData);
      }
    })
  });
}

export default readFile;
