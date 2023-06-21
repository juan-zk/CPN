const audioPlayer = document.getElementById('audioPlayer');
var bx = document.getElementById('play');


function playAudio() {
  if(bx.classList.contains('bx-active')){
    audioPlayer.pause();  
    bx.classList.remove('bx-active');
  }else{
    audioPlayer.play();
    bx.classList.add('bx-active');
  }
}





/* var jugadores = 9;
var stack = 1000;
var bb = 20;
var sb = 10;
ronda = 1;

while (stack > 0){
    console.log("Ronda "+ronda)
    console.log("Stack "+stack)
    console.log("Ciegas "+bb+", "+sb)
    if(ronda%2===0){
        stack = stack - bb;
        stack = stack -sb;
        bb += bb
        sb += sb;
    }
    ronda++;
}
*/


