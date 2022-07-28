export class Robot {
  constructor() {
    this.resetName()
  }

  _name: string = ''

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    let n = this.getRandomName()
    while (Robot.names.has(n)) {
      n = this.getRandomName()
    }
    Robot.names.add(n)
    this._name = n
  }

  static readonly names: Set<string> = new Set()

  public static releaseNames(): void {
    Robot.names.clear()
  }

  getRandomName(): string {
    const randomLetter = () => String.fromCharCode('A'.charCodeAt(0) + random(26))
    const randomNumber = () => random(10)
    const letters = [...Array(2)].map(randomLetter)
    const numbers = [...Array(3)].map(randomNumber)

    return letters.join('') + numbers.join('')
  }
}

/**
   @returns a number from 0 to max-1
 */
function random(max: number): number {
  return Math.floor(Math.random() * max)
}
