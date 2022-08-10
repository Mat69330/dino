var score = 1;
var mortscr = 0;
var scr = document.getElementById("scr")

function saut(){
  if(ps.classList != "anim"){
    ps.classList.add("anim")
  }
  setTimeout(function(){
    ps.classList.remove("anim")
  }, 700)
}

var scoreboucle = setInterval(function(){
  if (mortscr === 2) {
    scr.innerHTML = score;
    score++;
  }
  
}, 10)

function a(){
  block.classList.add("blb")
  mortscr = 2;
  score = 0;
}

var mort = setInterval(function(){
  var pstop = parseInt(window.getComputedStyle(ps).getPropertyValue("top"))
  var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
  
  if (blockleft<60 && blockleft>40 && pstop>=250) {
    block.classList.remove("blb")
    mortscr = 1;
  }
}, 10)
