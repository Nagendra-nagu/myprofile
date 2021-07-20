// window.onload=function(){
  // ................................pre-loader.................................

window.onload=function(){
  document.getElementById('pre-bodyid').style.display='none'
}
// ............................navbrar-on-scroll..................


// let Nav_main_container = document.getElementById("Nav-main-container1");
// var scroll1=window.pageYOffset;
// window.addEventListener("scroll", () => {
//   var scroll2=window.pageYOffset;
//   if (scroll1>scroll2) {
//     Nav_main_container.style.visibility='visible'
//   } else {
//     Nav_main_container.style.visibility='hidden'  
//   }
//   scroll1=scroll2
// });



// ...........................navbar-icon and resposive navbar....................
let icon_container = document.getElementById("nav-icon-containerid");
let icon = document.getElementById("nav-iconid");
let body = document.getElementsByTagName("body");

var state = "true";
icon_container.addEventListener("click", () => {
  if (state === "true") {
    icon.classList.add("open");
    document.getElementById("nav-item-container").style.transform =
      "translate(0px,150px)";
    state = "false";
  } else {
    icon.classList.remove("open");
    document.getElementById("nav-item-container").style.transform =
      "translate(400px,150px)";
    state = "true";
  }
});
// ..........................home person qulity...................................................
let xyz = document.getElementById("xyz");

let firstword = 0;
let firstchar = 0;

quality = Array("Devoloper", "Deginer", "Quick lerner", "Inquisitive");
function type() {
  if (firstchar < quality[firstword].length) {
    xyz.innerText += quality[firstword].charAt(firstchar);
    firstchar++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (firstchar > 0) {
    xyz.innerText = quality[firstword].substring(0, firstchar - 1);
    firstchar--;
    setTimeout(erase, 100);
  } else {
    firstword++;
    if (firstword >= quality.length) {   
      firstword = 0;
    }
    setTimeout(type, 1800);
  }
}

type();

// ............................................................
// }
