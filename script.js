fetch("/data.json")
  .then((req) => {
    if (!req.ok) {
      console.log("Oops! Something went wrong.");
      return null;
    }
    return req.json();
  })
  .then((data) => {
    data.forEach((data) => {
      showTime(data);
      //---------------------------Long Ver V
      // document.getElementById("daily").addEventListener("click", (e) => {
      //   let current = data.timeframes.daily.current;
      //   let previous = data.timeframes.daily.previous;
      //   activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Day - ${previous}Hrs</h2>`;
      // });
      // document.getElementById("weekly").addEventListener("click", (e) => {
      //   let current = data.timeframes.weekly.current;
      //   let previous = data.timeframes.weekly.previous;
      //   activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Week - ${previous}Hrs</h2>`;
      // });
      // document.getElementById("monthly").addEventListener("click", (e) => {
      //   let current = data.timeframes.monthly.current;
      //   let previous = data.timeframes.monthly.previous;
      //   activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Month - ${previous}Hrs</h2>`;
      // });
      document.getElementById("daily").click();
    });
  });

const showTime = (data) => {
  let periods = new Map();
  periods.set("daily", "day");
  periods.set("weekly", "week");
  periods.set("monthly", "month");
  let title =
    `${data.title}` == "Self Care"
      ? "self-care"
      : `${data.title}`.toLowerCase();

  const activity = document.querySelector(`#${title} .description .duration`);
  //---------------------------Short Ver V
  periods.forEach((time, period) => {
    document.getElementById(period).addEventListener("click", (e) => {
      e.preventDefault();
      const { current, previous } = data.timeframes[period];
      activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last ${time} - ${previous}Hrs</h2>`;
    });
  });
};
// window.addEventListener('load', clickButton);
