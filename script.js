let whites=document.querySelectorAll(".white");

let blacks=document.querySelectorAll(".black");

let div1=document.querySelector(".div1");
let box1=document.getElementById("b1");
let box2=document.getElementById("b2");
let box3=document.getElementById("b3");

let resetBtn = document.querySelector("button");

resetBtn.addEventListener("click", () => {
  box1.innerText = "";
  box3.innerText = "";
})

let audi = {
  wfirst: new Audio("./mp3/C1.mp3"),
  bfirst: new Audio("./mp3/Ds1.mp3"),
  wsec: new Audio("./mp3/A1.mp3"),
  bsec: new Audio("./mp3/Fs1.mp3"),
  wthird: new Audio("./mp3/C2.mp3"),
  wfourth: new Audio("./mp3/A2.mp3"),
  bthird: new Audio("./mp3/Ds2.mp3"),
  wfifth: new Audio("./mp3/C3.mp3"),
  bfourth: new Audio("./mp3/Fs2.mp3"),
  wsixth: new Audio("./mp3/A3.mp3"),
  bfifth: new Audio("./mp3/Ds3.mp3"),
  wseventh: new Audio("./mp3/C4.mp3"),
  weighth: new Audio("./mp3/A4.mp3"),
  bsixth: new Audio("./mp3/Fs3.mp3"),
  wninth: new Audio("./mp3/C5.mp3"),
  bseventh: new Audio("./mp3/Ds4.mp3"),
  wtenth: new Audio("./mp3/A5.mp3"),
  weleventh: new Audio("./mp3/C6.mp3"),
  beighth: new Audio("./mp3/Fs4.mp3"),
  wtwelfth: new Audio("./mp3/A6.mp3"),
  bninth: new Audio("./mp3/Ds5.mp3"),
  wthirteenth: new Audio("./mp3/C7.mp3"),
  btenth: new Audio("./mp3/Fs5.mp3"),
  wfourteenth: new Audio("./mp3/A7.mp3"),
  wfifteenth: new Audio("./mp3/C8.mp3"),
  beleventh: new Audio("./mp3/Ds6.mp3"),
  wsixteenth: new Audio("./mp3/A0.mp3"),
  btwelfth: new Audio("./mp3/Fs6.mp3"),
  wseventeenth: new Audio("./mp3/C1.mp3"),
  weighteenth: new Audio("./mp3/A1.mp3"),
  bthirteenth: new Audio("./mp3/Ds7.mp3"),
  wninteenth: new Audio("./mp3/C2.mp3"),
  bfourteenth: new Audio("./mp3/Fs7.mp3"),
  wtwentieth: new Audio("./mp3/A2.mp3"),
  bfifteenth: new Audio("./mp3/Ds1.mp3"),
  wtwentyfirst: new Audio("./mp3/C3.mp3"),
  wtwentysecond: new Audio("./mp3/A3.mp3"),
  bsixteenth: new Audio("./mp3/Fs1.mp3"),
  wtwentythird: new Audio("./mp3/C4.mp3"),
  bseventeenth: new Audio("./mp3/Ds2.mp3"),
  wtwentyfourth: new Audio("./mp3/A4.mp3"),
  wtwentyfifth: new Audio("./mp3/C5.mp3"),
  beighteenth: new Audio("./mp3/Fs2.mp3"),
  wtwentysixth: new Audio("./mp3/A5.mp3"),
  bninteenth: new Audio("./mp3/Ds3.mp3"),
  wtwentyseventh: new Audio("./mp3/C6.mp3"),
  btwentieth: new Audio("./mp3/Fs3.mp3"),
  wtwentyeighth: new Audio("./mp3/A6.mp3"),
  wtwentyninth: new Audio("./mp3/C7.mp3"),
  btwentyfirst: new Audio("./mp3/Ds4.mp3"),
  wthirtieth: new Audio("./mp3/A7.mp3"),
  btwentysecond: new Audio("./mp3/Fs4.mp3"),
  wthirtyfirst: new Audio("./mp3/C8.mp3"),
  wthirtysecond: new Audio("./mp3/A0.mp3"),
  btwentythird: new Audio("./mp3/Ds5.mp3"),
  wthirtythird: new Audio("./mp3/C1.mp3"),
  btwentyfourth: new Audio("./mp3/Fs5.mp3"),
  wthirtyfourth: new Audio("./mp3/A1.mp3"),
  btwentyfifth: new Audio("./mp3/Ds6.mp3"),
  wthirtyfifth: new Audio("./mp3/C2.mp3"),
  wthirtysixth: new Audio("./mp3/A2.mp3"),
};


whites.forEach(white => {
  white.addEventListener("click", function (e) {
   
     let keyText = this.querySelector("h5").innerText;

    let span = document.createElement("span");
    
    span.innerText = keyText + " ";
    box1.innerText = keyText;
   
    box3.appendChild(span);
    
    this.style.backgroundColor = "rgb(218, 215, 215)";
    this.style.scale = 0.95;

 
    let id = this.id;
    if (audi[id]) {
      audi[id].currentTime = 0; // repeat click e abar play
      audi[id].play();
    }

    setTimeout(() => {
      this.style.scale = 1;
       this.style.backgroundColor = "rgb(252, 252, 252)";
    }, 400);
  });
});


blacks.forEach(black => {
  black.addEventListener("click", function (e) {
   e.stopPropagation();
    let keyText = this.querySelector("h5").innerText;

    let span = document.createElement("span");
    
    span.innerText = keyText + " ";
    box1.innerText = keyText;
   
    box3.appendChild(span);
   
    this.style.scale = 0.95;

 
    let id = this.id;
    if (audi[id]) {
      audi[id].currentTime = 0; 
      audi[id].play();
    }

    setTimeout(() => {
      this.style.scale = 1;
      this.style.backgroundColor = "rgb(2, 2, 2)";
    }, 400);
  });
});



document.body.addEventListener("keydown", function(dets){
    console.log(dets);
 let id = null;

  if (dets.key === "1") {
    id = "wfirst";
  } else if (dets.key === "2") {
    id = "wsec";
  }else if (dets.key === "3") {
    id = "wthird";
  }else if (dets.key === "4") {
    id = "wfourth";
  }else if (dets.key === "5") {
    id = "wfifth";
  }else if (dets.key === "6") {
    id = "wsixth";
  }else if (dets.key === "7") {
    id = "wseventh";
  }else if (dets.key === "8") {
    id = "weighth";
  }else if (dets.key === "9") {
    id = "wninth";
  }else if (dets.key === "0") {
    id = "wtenth";
  }else if (dets.key === "q") {
    id = "weleventh";
  }else if (dets.key === "w") {
    id = "wtwelfth";
  }else if (dets.key === "e") {
    id = "wthirteenth";
  }else if (dets.key === "r") {
    id = "wfourteenth";
  }else if (dets.key === "t") {
    id = "wfifteenth";
  }else if (dets.key === "y") {
    id = "wsixteenth";
  }else if (dets.key === "u") {
    id = "wseventeenth";
  }else if (dets.key === "i") {
    id = "weighteenth";
  }else if (dets.key === "o") {
    id = "wninteenth";
  }else if (dets.key === "p") {
    id = "wtwentieth";
  }else if (dets.key === "a") {
    id = "wtwentyfirst";
  }else if (dets.key === "s") {
    id = "wtwentysecond";
  }else if (dets.key === "d") {
    id = "wtwentythird";
  }else if (dets.key === "f") {
    id = "wtwentyfourth";
  }else if (dets.key === "g") {
    id = "wtwentyfifth";
  }else if (dets.key === "h") {
    id = "wtwentysixth";
  }else if (dets.key === "j") {
    id = "wtwentyseventh";
  }else if (dets.key === "k") {
    id = "wtwentyeighth";
  }else if (dets.key === "l") {
    id = "wtwentyninth";
  }else if (dets.key === "z") {
    id = "wthirtieth";
  }else if (dets.key === "x") {
    id = "wthirtyfirst";
  }else if (dets.key === "c") {
    id = "wthirtysecond";
  }else if (dets.key === "v") {
    id = "wthirtythird";
  }else if (dets.key === "b") {
    id = "wthirtyfourth";
  }else if (dets.key === "n") {
    id = "wthirtyfifth";
  }else if (dets.key === "m") {
    id = "wthirtysixth";
  }else if (dets.key === "!") {
    id = "bfirst";
  }else if (dets.key === "@") {
    id = "bsecond";
  }else if (dets.key === "$") {
    id = "bthird";
  }
else if (dets.key === "%") {
    id = "bfourth";
  }else if (dets.key === "^") {
    id = "bfifth";
  }else if (dets.key === "*") {
    id = "bsixth";
  }else if (dets.key === "(") {
    id = "bseventh";
  }else if (dets.key === "Q") {
    id = "beighth";
  }else if (dets.key === "W") {
    id = "bninth";
  }else if (dets.key === "E") {
    id = "btenth";
  }else if (dets.key === "T") {
    id = "beleventh";
  }else if (dets.key === "Y") {
    id = "btwelfth";
  }else if (dets.key === "I") {
    id = "bthirteenth";
  }else if (dets.key === "O") {
    id = "bfourteenth";
  }else if (dets.key === "P") {
    id = "bfifteenth";
  }else if (dets.key === "S") {
    id = "bsixteenth";
  }else if (dets.key === "D") {
    id = "bseventeenth";
  }else if (dets.key === "G") {
    id = "beightteenth";
  }else if (dets.key === "H") {
    id = "bninteenth";
  }else if (dets.key === "J") {
    id = "btwentieth";
  }else if (dets.key === "L") {
    id = "btwentyfirst";
  }else if (dets.key === "Z") {
    id = "btwentysecond";
  }else if (dets.key === "C") {
    id = "btwentythird";
  }
else if (dets.key === "V") {
    id = "btwentyfourth";
  }
else if (dets.key === "B") {
    id = "btwentyfifth";
  }


   let span = document.createElement("span");
    
    span.innerText = dets.key+" ";
    box1.innerHTML = dets.key;
     box3.appendChild(span);


  if (!id) return; 
  
  const el = document.getElementById(id);
  
  el.style.scale = 0.95;

  
  audi[id].currentTime = 0;
  audi[id].play();

 
  
setTimeout(function(){
el.style.scale=1;

},400)
})