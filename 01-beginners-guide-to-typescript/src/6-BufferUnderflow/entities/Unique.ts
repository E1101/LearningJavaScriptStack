/**
 * we define and export a type alias UniqueId so that we
 * have some flexibility for refactoring this type later on
 */
type UniqueId = string;

interface Unique {
  getId(): UniqueId;
}

// A module can have only one default export,
// but any number of named exports.
// import {UniqueId} from './Unique'; // named import
// import Unique from './Unique'; // default import
export default Unique;
export {UniqueId};
