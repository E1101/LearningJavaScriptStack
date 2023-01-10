import genUniqueId from '../utils/genUniqueId';
import truncate from '../utils/truncate';

class Expense {
  private label: string;
  private amount: number;
  private date: Date;
  private id: string;

  constructor(
    label: string,
    amount: number,
    // union types are used to represent types that can be one among a set of types.
    // The syntax for union types uses the | character to signify a union of two or more types.
    date: Date | string,
  ) {
    // we are using the setter methods directly in our constructor.
    // We do this to centralize any transformation and verification logic for our data.
    this.updateLabel(label);
    this.updateAmount(amount);
    this.updateDate(date);

    this.id = genUniqueId();
  }

  getId(): string {
    return this.id;
  }

  getLabel(): string {
    return this.label;
  }

  updateLabel(label: string): void {
    this.label = truncate(label, 10);
  }

  getAmount(): number {
    return this.amount;
  }

  updateAmount(amount: number): void {
    this.amount = amount;
  }

  getDate(): Date {
    return this.date;
  }

  updateDate(date: Date | string): void {
    this.date = new Date(date);
  }
}

export default Expense;
