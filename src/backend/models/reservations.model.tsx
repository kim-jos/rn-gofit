export default class Reservations {
  // date: string;
  timeSlot: string;
  user: string;
  classRequiredCredits: number;
  className: string;
  // time: string;
  createdAt: Date;
  isFinal: boolean;
  startTime: Date;

  constructor(
    // date: string,
    timeSlot: string,
    user: string,
    classRequiredCredits: number,
    className: string,
    // time: string,
    createdAt: Date,
    isFinal: boolean,
    startTime: Date
  ) {
    // this.date = date;
    this.timeSlot = timeSlot;
    this.user = user;
    this.classRequiredCredits = classRequiredCredits;
    this.className = className;
    // this.time = time;
    this.createdAt = createdAt;
    this.isFinal = isFinal;
    this.startTime = startTime;
  }
}
