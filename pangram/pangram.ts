export function isPangram(sentence: string): boolean {
  const normalized = sentence.toLowerCase()
    .split('')
    .filter(char => char.match(/[a-z]/))
  
  return (new Set(normalized)).size === 26
}
