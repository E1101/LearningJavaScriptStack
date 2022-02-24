import Unique from "./Unique";
import Summary from "./Summary";

// any class that implements Attachment must
// also implement Unique and Summary.
interface Attachment extends Unique, Summary {
  // returns a Promise that resolves to true if the upload
  // was successful and false if it was unsuccessful.
  upload(): Promise<boolean>;
}

export default Attachment;
