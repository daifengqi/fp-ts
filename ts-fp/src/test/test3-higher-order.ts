import { curry } from "../utils/curry";

// a function equal to fn
function __equal__(fn: Function) {
  return function (this: any, ...args: any[]) {
    return fn.apply(this, args);
  };
}

// update equal
function __watch__(fn: Function) {
  return function (this: any, ...args: any[]) {
    // do something 1
    console.log("111");
    const ret = fn.apply(this, args);
    // do something 2
    console.log("222");
    return ret;
  };
}

// use __watch__ to do throttle
function throttle(fn: Function, timeout: number) {
  let timer: number | null;
  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => (timer = null), timeout);
      return fn.apply(this, args);
    }
  };
}

function add(a: number, b: number) {
  return a + b;
}

function addFour(a: number, b: number, c: number, d: number) {
  return a + b + c + d;
}

const addWithEqual = __equal__(add);
const addWithWatch = __watch__(add);
const addWithThrottle = throttle(add, 1000);
const addWithCurry = curry(addFour);

export function run() {
  console.log("addWithEqual: ", addWithEqual(1, 2));
  console.log("addWithWatch: ", addWithWatch(1, 2));
  console.log("addWithThrottle: ", addWithThrottle(1, 2));
  console.log("addWithCurry: ", addWithCurry(1)(2)(3)(4));
}
