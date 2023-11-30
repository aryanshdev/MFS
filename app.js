const inputs = document.querySelectorAll(".contact-input");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  allElements.forEach((el) => {
    el.classList.add("transition");
    setTimeout(() => {
      el.classList.remove("transition");
    }, 1000);
  });
});

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });

  ipt.addEventListener("blur", () => {
    if (ipt.value == "") {
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});

function submitForm() {
  const form = document.forms["contact-form"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwXnypvIWpeRQM4aDSuJuaQuwrU6KZ98HLhV_N4JcKai1oZpnYMmlP3eV9cJxgpucXy/exec";
  document.getElementById("submitButton").disabled = true;

if( document.getElementById("email").value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)){
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => (window.location.href = "./thanks.html"))
  .catch((error) => {
    document.getElementById("submitButton").disabled = false;
  });
}
else{
  alert("Invalid E-Mail, Please Check Your E-Mail And Try Again")
}
  }
