import Month from '../types/Month';
import Budget from './Budget';

class TrackedMonth {
  // We can statically enforce that only valid months are passed to our constructor
  // by using type aliases and the union operator.
  private month: Month;
  private year: number;
  private budgets: Budget[];

  constructor(
    month: Month,
    year: number,
    budgets: Budget[],
  ) {
    this.updateMonth(month);
    this.updateYear(year);

    this.budgets = budgets;
  }

  getMonth(): Month {
    return this.month;
  }

  updateMonth(month: Month) {
    this.month = month;
  }

  getYear(): number {
    return this.year;
  }

  updateYear(year: number) {
    this.year = year;
  }

  getBudgets(): Budget[] {
    return this.budgets;
  }
}

export default TrackedMonth;
