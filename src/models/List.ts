type T = any;
type R = any;
type where = (iterator: T) => T[];
type callback = (iterator: T) => any;
type each = (iterator: T) => void | any;

export default class List<T> {
  private self: T[];

  constructor() {
    this.self = [];
  }

  add(obj: T): void {
    this.self.push(obj);
  }
  
  each(func: each): void {
    this.self.forEach(i => func(i));
  }

  map(func: callback): R[] {
    return this.self.map(i => func(i));
  }

  remove(id: number): void {
    delete this.self[id];
  }

  find(id: number): T {
    return this.self[id];
  }

  where(scope: where): T[] {
    return this.self.filter(i => scope(i));
  }


  clone() {
    const c = new List<T>();
    c.self = this.self;
    return c;
  }
}