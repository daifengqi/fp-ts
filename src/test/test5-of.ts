import { Functor } from "../utils/functor";

function double(x: number) {
  console.log("double is caller with:", x);
  return x * 2;
}
function add5(x: number) {
  console.log("add5 is caller with:", x);
  return x + 5;
}

export function run() {
  const a = Functor.of(5).map(add5).map(double);
  console.log(a.value);
}
