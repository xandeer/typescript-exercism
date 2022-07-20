export function isLeap(year: number): boolean {
  return year.isDivisibleBy(400) || (year.isDivisibleBy(4) && !year.isDivisibleBy(100))
}


declare global {
  interface Number {
    isDivisibleBy(n: number): boolean
  }
}

Number.prototype.isDivisibleBy = function(n: number): boolean {
  return this.valueOf() % n === 0
}
