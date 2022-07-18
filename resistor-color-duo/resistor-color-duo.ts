const ResistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const

type Color = typeof ResistorColors[number]

export function decodedValue(colors: Color[]): number {
  return parseInt(colors.slice(0, 2).map(n => ResistorColors.indexOf(n)).join(''))
}
