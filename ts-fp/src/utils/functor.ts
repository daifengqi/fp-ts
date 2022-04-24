export class Functor {
  value: any;

  static of(val: any) {
    return new Functor(val);
  }

  constructor(value: any) {
    this.value = value;
  }

  map(fn: Function) {
    return Functor.of(fn(this.value));
  }
}
