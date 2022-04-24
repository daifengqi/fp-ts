export function composeTwo(f: Function, g: Function) {
  return function (x: any) {
    return f(g(x));
  };
}

// use '.reduceRight' to implement 'compose'
// or you can reverse it with '.reduce'
export const compose =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduceRight((res, fn) => fn(res), x);
