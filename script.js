const buttons = document.querySelectorAll(".btn");
const span = document.querySelector(".span");
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.classList.contains("increment"));
    if (btn.classList.contains("increment")) count++;
    else if (btn.classList.contains("decrement")) count--;
    else count = 0;

    if (count > 0) span.style.color = "green";
    else span.style.color = "red";

    span.textContent = count;
  });
});
