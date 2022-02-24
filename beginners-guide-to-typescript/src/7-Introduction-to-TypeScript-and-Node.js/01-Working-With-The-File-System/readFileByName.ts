// Because we enabled the resolveJsonModule in our tsconfig.json,
// we can import JSON files and TypeScript will take care of
// inferring the correct types from that file.
import numbers from './numbers.json';
import strings from './strings.json';

// we use the typeof keyword to extract the type from the imported JSON.
// It's important that we don't use the value of the JSON files anywhere
// in the file so that only the types of those files are retained when the
// code is compiled. That explains why in the code we use dynamic imports
// instead of using the imports that we imported at the top of the file.
type NumbersJSON = typeof numbers;
type StringsJSON = typeof strings;

// Because we've narrowed the possible file names to a set of names,
// we can use function overloads to describe return types for specific inputs.
async function readFileByName(name: 'Numbers'): Promise<NumbersJSON>;
async function readFileByName(name: 'Strings'): Promise<StringsJSON>;

async function readFileByName(
  name: 'Numbers' | 'Strings'
): Promise<NumbersJSON | StringsJSON> {
  if (name === 'Numbers') {
    return await import('./numbers.json');
  }

  if (name === 'Strings') {
    return await import('./strings.json');
  }

  throw "Name not recognized";
}

export default readFileByName;
