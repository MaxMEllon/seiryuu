type T = any;
type R = any;
type filter = (iterator: T) => boolean;
type mapper = (iterator: T, index: number) => any;

export default class List<T> {
  private raw: T[];

  constructor() {
    this.raw = [];
  }

  add(obj: T): void {
    this.raw.push(obj);
  }
  
  each(func: mapper): void {
    this.raw.forEach((val, index) => func(val, index));
  }

  map(func: mapper): R[] {
    return this.raw.map((val, index) => func(val,index));
  }

  remove(id: number): void {
    delete this.raw[id];
  }

  find(id: number): T {
    return this.raw[id];
  }

  where(scope: filter): T[] {
    return this.raw.filter(i => scope(i));
  }

  clone() {
    const c = new List<T>();
    c.raw = this.raw;
    return c;
  }
}
