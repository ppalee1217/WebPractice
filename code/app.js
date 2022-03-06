let sections = document.getElementsByTagName('section');

let temp=0;
let modal = document.querySelectorAll(".modal");
let btn = document.querySelectorAll(".click");
let span = document.querySelectorAll(".close");
// tracks index of current section
let currentSectionIndex = 0;
//updateADD();
document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].className = '';
    // sections[currentSectionIndex].getElementsByClassName('left')[0].children[currentSectionIndex].className = 'click';
    // sections[currentSectionIndex].getElementsByClassName('modal-active')[0].className = 'modal';
    currentSectionIndex--;
    sections[currentSectionIndex].className = 'active';
    // sections[currentSectionIndex].getElementsByClassName('left')[0].children[currentSectionIndex].className  = 'clickON';
    // sections[currentSectionIndex].getElementsByClassName('modal')[0].className = 'modal-active';
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].className = '';
    // sections[currentSectionIndex].getElementsByClassName('left')[0].children[currentSectionIndex].className  = 'click';
    // sections[currentSectionIndex].getElementsByClassName('modal-active')[0].className = 'modal';
    currentSectionIndex++;
    sections[currentSectionIndex].className = 'active';
    // sections[currentSectionIndex].getElementsByClassName('left')[0].children[currentSectionIndex].className = 'clickON';
    // sections[currentSectionIndex].getElementsByClassName('modal')[0].className = 'modal-active';
  }
});

// function updateREMOVE() {
//   document.getElementsByClassName('modal')[currentSectionIndex].removeEventListener("click",btnHandler,false);
//   document.getElementsByClassName('click')[currentSectionIndex].removeEventListener("click",spanHandler,false);
//   document.getElementsByClassName('close')[currentSectionIndex].removeEventListener("click",windowHandler,false);
// }

// function updateADD() {
//   document.getElementsByClassName('modal')[0].addEventListener("click",btn,false);
//   document.getElementsByClassName('clicks')[0].addEventListener("click",span,false);
//   document.getElementsByClassName('close')[0].addEventListener("click",window,false);
//   console.log(document.getElementsByClassName('modal').length);
// }
// $('.clickON').click(function() {
//   modal.style.display = "block";
// }
for (i=0;i<modal.length;i++){
  btn[i].onclick = btnClick;
  span[i].onclick = spanClick;
}

function btnClick() {
  modal[currentSectionIndex].style.display = "block";
}

function spanClick(){
  modal[currentSectionIndex].style.display = "none";
}

window.onclick = function(event){
  if (event.target == modal[currentSectionIndex]) {
    modal[currentSectionIndex].style.display = "none";
  }
}