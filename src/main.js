import "./style.css";

function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.when("click").subscribe(() => setCounter(counter + 1));
  setCounter(0);
}

function subsr() {
  const nums = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(3);
    subscriber.next(5);
    subscriber.next(7);
    subscriber.next(9);
  });

  nums
    .map((n) => n + 1)
    .inspect((n) => console.log(`tap: ${n}`))
    .filter((n) => n < 10)
    .subscribe((n) => console.log("new data for subscriber 1:", n));

  nums.subscribe((n) => console.log("new data for subscriber 2:", n));
}

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));

subsr();
