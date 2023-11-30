const inputs = document.querySelectorAll(".contact-input");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");


toggleBtn.addEventListener("click" , () =>{
    document.body.classList.toggle("dark");

    allElements.forEach(el => {
      el.classList.add("transition");
      setTimeout(()=>{
        el.classList.remove("transition");
      } , 1000);
    });
});

inputs.forEach((ipt) => {

  ipt.addEventListener("focus" , () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });

  ipt.addEventListener("blur" , () => {
    if(ipt.value == ""){
        ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
    
  });

});

function submitForm() {

  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => window.location.href = "./thanks.html")
      .catch(error => console.error('Error!', error.message))
  })
  form.submit();

}