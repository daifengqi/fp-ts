export function curry(fn: Function) {
  // return a function
  return function curried(this: any, ...args1: any[]) {
    if (args1.length >= fn.length) {
      return fn.apply(this, args1);
    }

    return (...args2: any[]) => {
      return curried.apply(this, args1.concat(args2));
    };
  };
}
