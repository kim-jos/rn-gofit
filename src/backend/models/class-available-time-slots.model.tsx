export default class ClassAvailableTimeSlots {
  classRef: string;
  startTime: string;
  endTime: string;
  minHoursBeforeClass: number;
  maxHoursBeforeClass: number;
  maxLimit: number;
  minHoursToCancel: number;
  creditsRequired: number;

  constructor(
    classRef: string,
    startTime: string,
    endTime: string,
    minHoursBeforeClass: number,
    maxHoursBeforeClass: number,
    maxLimit: number,
    minHoursToCancel: number,
    creditsRequired: number
  ) {
    this.classRef = classRef;
    this.startTime = startTime;
    this.endTime = endTime;
    this.minHoursBeforeClass = minHoursBeforeClass;
    this.maxHoursBeforeClass = maxHoursBeforeClass;
    this.maxLimit = maxLimit;
    this.minHoursToCancel = minHoursToCancel;
    this.creditsRequired = creditsRequired;
  }
}
