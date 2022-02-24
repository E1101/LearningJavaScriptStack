/**
 * We don't want every class that implements Unique to have to
 * create their own logic for generating an ID, so we centralize this logic
 */
import {UniqueId} from '../entities/Unique';

function getUniqueId(): UniqueId {
  // only take seven characters, starting at index two so
  // that we don't include zero and the decimal character in the ID.
  return String(Math.random()).substr(2, 7);
}

export default getUniqueId;
