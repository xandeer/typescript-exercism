export function age(planet: Planet, seconds: number): number {
  const earthAge = seconds / EARTH_YEAR_IN_SECONDS
  return Math.round(earthAge / AGE_RATIO[planet] * 1e2) / 1e2
}

const EARTH_YEAR_IN_SECONDS = 31557600

const AGE_RATIO = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

type Planet = keyof typeof AGE_RATIO
