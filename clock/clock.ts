export class Clock {
  private static MINUTES_IN_HOUR: number = 60
  private static MINUTES_IN_DAY: number = Clock.MINUTES_IN_HOUR * 24

  private readonly minutes: number

  constructor(hour: number, minute: number = 0) {
    const minutes = (hour * Clock.MINUTES_IN_HOUR + minute) % Clock.MINUTES_IN_DAY
    this.minutes = minutes < 0 ? minutes + Clock.MINUTES_IN_DAY : minutes
  }

  toString() {
    const hours = Math.floor(this.minutes / Clock.MINUTES_IN_HOUR)
      .toString()
      .padStart(2, '0')
    const minutes = (this.minutes % Clock.MINUTES_IN_HOUR)
      .toString()
      .padStart(2, '0')
    return `${hours}:${minutes}`
  }

  plus(minutes: number) {
    return new Clock(0, this.minutes + minutes)
  }

  minus(minutes: number) {
    return new Clock(0, this.minutes - minutes)
  }

  equals(other: Clock) {
    return this.minutes === other.minutes
  }
}
