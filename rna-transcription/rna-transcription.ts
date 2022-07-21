export function toRna(dnaStrand: string): string {
  return [...dnaStrand].map(it => {
    const rna = DNA_TO_RNA[it]
    if (rna) {
      return rna
    } else {
      throw Error('Invalid input DNA.')
    }
  }).join('')
}

type Map = {
  [key: string]: string
}

const DNA_TO_RNA: Map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}
