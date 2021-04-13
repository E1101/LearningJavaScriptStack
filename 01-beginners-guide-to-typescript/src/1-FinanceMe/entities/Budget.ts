import Category from '../enums/Category';
import Expense from './Expense';
import truncate from '../utils/truncate';
import genUniqueId from '../utils/genUniqueId';

class Budget {
  private category: Category;
  // using Number, String, and Boolean over their lowercase counterparts:
  // number, string, and boolean. In general, you should never use the uppercase
  // variants as they refer to objects and not primitives.
  private label: string;
  private limit: number;
  private id: string;
  private expenses: Expense[];

  constructor(
    category: Category,
    label: string,
    limit: number,
    // TypeScript makes annotating arrays painless as we just have to add []
    // to an existing type to represent an array of that type
    expenses: Expense[],
  ) {
    this.updateLabel(label);
    this.updateCategory(category);
    this.updateLimit(limit);

    this.id = genUniqueId();
    this.expenses = expenses;
  }

  getId(): string {
    return this.id;
  }

  getCategory(): Category {
    return this.category;
  }

  updateCategory(category: Category) {
    this.category = category;
  }

  getLabel(): string {
    return this.label;
  }

  updateLabel(label: string) {
    this.label = truncate(label, 10);
  }

  getLimit(): number {
    return this.limit;
  }

  updateLimit(limit: number) {
    this.limit = limit;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getExpenseTotal(): number {
    return this
      .getExpenses()
      // The result of the addition becomes the accumulator in the next iteration,
      // resulting in the sum of all expenses by the time the function returns.
      .reduce((sum, expense) => sum + expense.getAmount(), 0);
  }

  getIsOverLimit(): boolean {
    return this.getExpenseTotal() > this.getLimit();
  }
}

export default Budget;
