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
    setTimeout(() => subscriber.next(2));
  });

  nums.subscribe((n) => console.log("new data for subscriber 1:", n));

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
