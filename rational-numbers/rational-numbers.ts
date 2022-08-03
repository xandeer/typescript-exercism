export class Rational {
  private a: number
  private b: number
  constructor(a: number, b: number) {
    this.a = a
    this.b = b
  }

  add(o: Rational): Rational {
    return new Rational(this.a * o.b + o.a * this.b, this.b * o.b).reduce()
  }

  sub(o: Rational): Rational {
    return new Rational(this.a * o.b - o.a * this.b, this.b * o.b).reduce()
  }

  mul(o: Rational): Rational {
    return new Rational(this.a * o.a, this.b * o.b).reduce()
  }

  div(o: Rational): Rational {
    return new Rational(this.a * o.b, this.b * o.a).reduce()
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b))
  }

  exprational(x: number): Rational {
    return new Rational(this.a ** x, this.b ** x)
  }

  expreal(x: number): number {
    const r = x ** (this.a / this.b)
    return this.a * this.b < 0 ? r : Math.ceil(r)
  }

  reduce(): Rational {
    const d = gcd(this.a, this.b)
    const a = this.a * this.b < 0 ? -1 : 1
    return new Rational(a * Math.abs(this.a / d), Math.abs(this.b / d))
  }
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return Math.abs(a)
  }
  return gcd(b, a % b)
}
