export function find(haystack: number[], needle: number): number {
  return search(haystack, needle)
}

function search(haystack: number[], needle: number, left: number = 0): number {
  const mid = Math.floor(haystack.length / 2)

  if (haystack.length === 0) {
    throw new Error('Value not in array')
  } else if (haystack[mid] === needle) {
    return left + mid
  } else if (haystack[mid] > needle) {
    return search(haystack.slice(0, mid), needle, left)
  } else {
    return search(haystack.slice(mid + 1), needle, left + mid + 1)
  }
}
