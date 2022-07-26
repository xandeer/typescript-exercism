export function isIsogram(input: string): boolean {
  const letters = input
    .toLowerCase()
    .split('')
    .filter(letter => letter.match(/[a-z]/))
  const uniqueLetters = new Set(letters)

  return letters.length === uniqueLetters.size
}
