function setColor(el: HTMLElement, color: string) {
  el.style.color = color;
}

function pureChange(fn: Function) {
  return function (els: HTMLElement[], color: string) {
    Array.from(els).map((item) => fn(item, color));
  };
}

const app1 = document.querySelector<HTMLDivElement>("#app1")!;
const app2 = document.querySelector<HTMLDivElement>("#app2")!;
const app3 = document.querySelector<HTMLDivElement>("#app3")!;

const apps = [app1, app2, app3];

// pureChange() is pure because it has no effect
const newSetColor = pureChange(setColor);

export function run() {
  newSetColor(apps, "red"); // newSetColor() is not pure, anyway
}
