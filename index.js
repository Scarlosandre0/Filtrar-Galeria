const btnEl = document.querySelectorAll(".btn");
const itemEls = document.querySelectorAll(".item");
var tempActive = document.querySelector(".active");

btnEl.forEach((btn) => {
  btn.addEventListener("click",(e) => {

    //adicionar borda ao botao
    tempActive.classList.remove("active");
    btn.classList.add("active");
    tempActive = btn;

    //Filtrar items
    const name = e.target.dataset.name;
    itemEls.forEach((itemEl) =>{
      if(name === "all") {
        itemEl.style.display = "block"
      }else {
        if(itemEl.classList.contains(name)) {
          itemEl.style.display = "block"
        }else{
          itemEl.style.display = "none";
        }
      }
    })
  })
})