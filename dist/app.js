function openNav() {
    document.getElementById("navbar").classList.toggle("!left-[0%]");
    document.body.classList.toggle("overflow-hidden");
}

let mybutton = document.getElementById("top-button")

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block"
  } else{
    mybutton.style.display = "none"
  } 
}
function topfuncition(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}
