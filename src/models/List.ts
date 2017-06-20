type T = any;
type R = any;
type where = (iterator: T) => T[];
type callback = (iterator: T) => any;
type each = (iterator: T) => void | any;

export default class List<T> {
  private raw: T[];

  constructor() {
    this.raw = [];
  }

  add(obj: T): void {
    this.raw.push(obj);
  }
  
  each(func: each): void {
    this.raw.forEach(i => func(i));
  }

  map(func: callback): R[] {
    return this.raw.map(i => func(i));
  }

  remove(id: number): void {
    delete this.raw[id];
  }

  find(id: number): T {
    return this.raw[id];
  }

  where(scope: where): T[] {
    return this.raw.filter(i => scope(i));
  }


  clone() {
    const c = new List<T>();
    c.raw = this.raw;
    return c;
  }
}