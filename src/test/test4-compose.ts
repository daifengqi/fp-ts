import { compose, composeTwo } from "../utils/compose";

function double(x: number) {
  console.log("double is caller with:", x);
  return x * 2;
}
function add5(x: number) {
  console.log("add5 is caller with:", x);
  return x + 5;
}

function square(x: number) {
  console.log("square is caller with:", x);
  return x * x;
}

export function run() {
  console.log("--- composeTwo");
  const adder = composeTwo(double, add5);
  console.log(adder(1));

  const adder2 = compose(double, add5, square);
  console.log(adder2(2));
}
