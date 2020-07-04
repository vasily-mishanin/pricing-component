//const { init } = require("browser-sync");

window.onload = () => {
  console.log("loaded!!!");

  let toggler = document.getElementById("price-switch");
  let basicPlan = document.querySelector("#basic");
  let professionalPlan = document.querySelector("#professional");
  let masterPlan = document.querySelector("#master");

  toggler.addEventListener("change", () => {
    if (toggler.checked) {
      changePrice(basicPlan, "19.99");
      changePrice(professionalPlan, "24.99");
      changePrice(masterPlan, "39.99");
    } else {
      changePrice(basicPlan, "199.99");
      changePrice(professionalPlan, "249.99");
      changePrice(masterPlan, "399.99");
    }
  });
};

function changePrice(element, newPrice) {
  element.textContent = newPrice;
}
