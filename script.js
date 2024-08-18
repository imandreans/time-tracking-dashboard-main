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
      let current = data.timeframes.daily.current;
      let previous = data.timeframes.daily.previous;
      let title =
        `${data.title}` == "Self Care"
          ? "self-care"
          : `${data.title}`.toLowerCase();
      // activitySection(title, current, previous);
      // activitySection(title, current, previous);
      const activity = document.querySelector(
        `#${title} .description .duration`
      );
      // console.log(data.timeframes[1]);
      //---------------------------Short Ver V
      // ["daily", "weekly", "monthly"].forEach((period) => {
      //   document.getElementById(period).addEventListener("click", () => {
      //     const { current, previous } = data.timeframes[period];
      //     activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Day - ${previous}Hrs</h2>`;
      //   });
      // });
      //---------------------------Long Ver V
      activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Day - ${previous}Hrs</h2>`;
      document.getElementById("daily").addEventListener("click", (e) => {
        let current = data.timeframes.daily.current;
        let previous = data.timeframes.daily.previous;
        activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Day - ${previous}Hrs</h2>`;
      });
      document.getElementById("weekly").addEventListener("click", (e) => {
        let current = data.timeframes.weekly.current;
        let previous = data.timeframes.weekly.previous;
        activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Week - ${previous}Hrs</h2>`;
      });
      document.getElementById("monthly").addEventListener("click", (e) => {
        let current = data.timeframes.monthly.current;
        let previous = data.timeframes.monthly.previous;
        activity.innerHTML = `<h1>${current}Hr</h1> <h2>Last Month - ${previous}Hrs</h2>`;
      });
      document.getElementById("daily").click();
    });
  });
// window.addEventListener('load', clickButton);
