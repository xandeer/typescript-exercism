export class LinkedList<TElement> {
  private list: TElement[] = []

  public push(element: TElement) {
    this.list = [...this.list, element]
  }

  public pop(): TElement {
    const lastElement = this.list[this.list.length - 1]
    this.list = this.list.slice(0, this.list.length - 1)
    return lastElement
  }

  public shift(): TElement {
    const firstElement = this.list[0]
    this.list = this.list.slice(1)
    return firstElement
  }

  public unshift(element: TElement) {
    this.list = [element, ...this.list]
  }

  public delete(element: TElement) {
    this.list = this.list.filter(e => e !== element)
  }

  public count(): number {
    return this.list.length
  }
}
