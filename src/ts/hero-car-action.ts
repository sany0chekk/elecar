const carElement = document.querySelector<HTMLElement>(".hero-car-img");
const engineBtn = document.querySelector<HTMLElement>("#startStopBtn");
const carTemperature = document.querySelector<HTMLElement>("#car-temperature"),
  carSpeed = document.querySelector<HTMLElement>("#car-speed"),
  carBattery = document.querySelector<HTMLElement>("#car-battery");

let isRunning = false;
let isAnimating = false;

const animateValue = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number,
  incrementStep: number = 1
) => {
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const increment = end > start ? incrementStep : -incrementStep;

  return new Promise<void>((resolve) => {
    const step = () => {
      current += increment;
      element.textContent = current.toString();
      if (
        (increment > 0 && current < end) ||
        (increment < 0 && current > end)
      ) {
        setTimeout(step, stepTime);
      } else {
        element.textContent = end.toString();
        resolve();
      }
    };
    step();
  });
};

engineBtn?.addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;
  if (isRunning && carTemperature && carSpeed && carBattery) {
    engineBtn.textContent = "START";
    engineBtn.classList.remove("active");
    carElement?.classList.remove("active");
    Promise.all([
      animateValue(
        carTemperature,
        parseInt(carTemperature?.textContent ?? "0"),
        0,
        1000
      ),
      animateValue(
        carSpeed,
        parseInt(carSpeed?.textContent ?? "0"),
        0,
        1000,
        4
      ),
      animateValue(
        carBattery,
        parseInt(carBattery?.textContent ?? "0"),
        0,
        1000
      ),
    ]).finally(() => {
      isAnimating = false;
    });
  } else {
    engineBtn.textContent = "STOP";
    engineBtn.classList.add("active");
    carElement?.classList.add("active");

    if (carTemperature && carSpeed && carBattery) {
      Promise.all([
        animateValue(carTemperature, 0, 24, 1000),
        animateValue(carSpeed, 0, 873, 1000, 4),
        animateValue(carBattery, 0, 94, 1000),
      ]).finally(() => {
        isAnimating = false;
      });
    }
  }

  isRunning = !isRunning;
});
