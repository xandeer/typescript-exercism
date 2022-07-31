const Actions = [
  'wink',
  'double blink',
  'close your eyes',
  'jump'
] as const

/**
  * Test bit at index n
  */
function bitTest(x: number, n: number): boolean {
  return (x & (1 << n)) !== 0
}

export function commands(binary: number): string[] {
  const actions = Actions.filter((_, i) => bitTest(binary, i))

  return bitTest(binary, Actions.length) ? actions.reverse() : actions
}
