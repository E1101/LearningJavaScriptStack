import TrackedMonth from './TrackedMonth';
import genUniqueId from '../utils/genUniqueId';
import Month from '../types/Month';

class User {
  // A common pattern that we'll use in FinanceMe is to set internal class properties to private
  // so they are not accessible outside of the class. In order to access the properties, methods
  // are defined for retrieving and updating those properties
  private name: string;
  private id: string;
  private trackedMonths: TrackedMonth[];

  constructor(
    name: string,
    trackedMonths: TrackedMonth[],
  ) {
    this.updateName(name);

    this.trackedMonths = trackedMonths;
    this.id = genUniqueId();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  updateName(name: string) {
    this.name = name;
  }

  getTrackedMonths(): TrackedMonth[] {
    return this.trackedMonths;
  }

  getTrackedMonthByDate(
    month: Month,
    year: number,
  ): TrackedMonth {
    return this
      .getTrackedMonths()
      // The callback returns true when we have found the TrackedMonth
      // whose year and month matches those passed to the method.
      .find(trackedMonth => (
        trackedMonth.getMonth() === month
        && trackedMonth.getYear() === year
      ));
  }
}

export default User;
