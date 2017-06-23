import * as md5 from 'blueimp-md5';

type T = any;
type R = any;
type filter = (iterator: T) => boolean;
type mapper = (iterator: T, index: number) => any;

export default class List<T> {
  private raw: T[];
  private hash: string;

  constructor() {
    this.raw = [];
  }

  private updateHash(): void {
    this.hash = md5(`${this.constructor.name.toString()} ${JSON.stringify(this)}`);
  }

  is(next: List<T>): boolean {
    return this.hash == next.hash;
  }

  get size(): number {
    return this.raw.length;
  }

  add(obj: T): List<T> {
    const before: string = this.hash;
    this.raw.push(obj);
    this.updateHash();
    return before != this.hash ? this.clone() : this;
  }

  each(func: mapper): void {
    this.raw.forEach((val, index) => func(val, index));
  }

  map(func: mapper): R[] {
    return this.raw.map((val, index) => func(val,index));
  }

  remove(id: number): List<T> {
    const before: string = this.hash;
    const index: number = this.raw.findIndex((i: any): boolean => i.id == id);
    if (index != -1) this.raw.splice(index, 1);
    this.updateHash();
    return before != this.hash ? this.clone() : this;
  }

  find(id: number): T | void {
    return this.raw.find((i: any): boolean => i.id == id);
  }

  where(scope: filter): T[] {
    return this.raw.filter((i: T): boolean => scope(i));
  }

  clone() {
    const c = new List<T>();
    c.raw = this.raw;
    return c;
  }
}