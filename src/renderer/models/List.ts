import * as md5 from 'blueimp-md5'

type filter<T> = (iterator: T) => boolean
type each<T> = (iterator: T, index: number) => any
type mapper<T, R> = (iterator: T, index: number) => any

export default class List<T> {
  private raw: T[]
  private _hash: string

  constructor() {
    this.raw = []
    this.updateHash()
  }

  get hash(): string {
    return this._hash
  }

  get size(): number {
    return this.raw.length
  }

  is(next: any): boolean {
    return this.hash === next.hash
  }

  add(obj: T): List<T> {
    const before: string = this.hash
    this.raw.push(obj)
    this.updateHash()
    return before !== this.hash ? this.clone() : this
  }

  each(func: each<T>): void {
    this.raw.forEach((val, index) => func(val, index))
  }

  map<R>(func: mapper<T, R>): R[] {
    return this.raw.map((val, index) => func(val, index))
  }

  remove(id: number): List<T> {
    const before: string = this.hash
    const index: number = this.raw.findIndex((i: any): boolean => i.id === id)
    if (index !== -1) this.raw.splice(index, 1)
    this.updateHash()
    return before !== this.hash ? this.clone() : this
  }

  find(id: number): T | void {
    return this.raw.find((i: any): boolean => i.id === id)
  }

  where(scope: filter<T>): T[] {
    return this.raw.filter((i: T): boolean => scope(i))
  }

  clone() {
    const c = new List<T>()
    c.raw = this.raw
    c.updateHash()
    return c
  }

  private updateHash(): void {
    this._hash = md5(`${this.constructor.name.toString()} ${JSON.stringify(this.raw)}`)
  }
}
