let d1 = document.getElementById("dice-1");
let d2 = document.getElementById("dice-2");
let diceImages = [
  "./img/dice1.png",
  "./img/dice2.png",
  "./img/dice3.png",
  "./img/dice4.png",
  "./img/dice5.png",
  "./img/dice6.png",
];
//dung getElementsByClassName
let btn1 = document.getElementsByClassName("roll-dice");
  //Dung HTML Event Attributes
  btn1[0].addEventListener("click", function () {
    let randomNum1 = Math.floor(Math.random() * 6);
    d1.src = diceImages[randomNum1];
    let randomNum2 = Math.floor(Math.random() * 6);
    d2.src = diceImages[randomNum2];
  });

  //Dung JavaScript DOM EventListener với HTML DOM Event Object
  // btn1[0].onclick = function () {
  //   let randomNum1 = Math.floor(Math.random() * 6);
  //   d1.src = diceImages[randomNum1];
  //   let randomNum2 = Math.floor(Math.random() * 6);
  //   d2.src = diceImages[randomNum2];
  // };


//dung querySelector
//let btn1 = document.querySelector(".roll-dice");

  //Dung HTML Event Attributes
  // btn1.addEventListener("click", function () {
  //     let randomNum1 = Math.floor(Math.random() * 6);
  //     d1.src = diceImages[randomNum1];
  //     let randomNum2 = Math.floor(Math.random() * 6);
  //     d2.src = diceImages[randomNum2];
  // });
  
  //Dung JavaScript DOM EventListener với HTML DOM Event Object
  // btn1.onclick = function () {
  //     let randomNum1 = Math.floor(Math.random() * 6);
  //     d1.src = diceImages[randomNum1];
  //     let randomNum2 = Math.floor(Math.random() * 6);
  //     d2.src = diceImages[randomNum2];
  // };

//dung querySelectorAll
//let btn1 = document.querySelectorAll(".roll-dice");

  //Dung HTML Event Attributes
  // btn1[0].addEventListener("click", function () {
  //     let randomNum1 = Math.floor(Math.random() * 6);
  //     d1.src = diceImages[randomNum1];
  //     let randomNum2 = Math.floor(Math.random() * 6);
  //     d2.src = diceImages[randomNum2];
  // });

  //Dung JavaScript DOM EventListener với HTML DOM Event Object
  // btn1[0].onclick = function () {
  //     let randomNum1 = Math.floor(Math.random() * 6);
  //     d1.src = diceImages[randomNum1];
  //     let randomNum2 = Math.floor(Math.random() * 6);
  //     d2.src = diceImages[randomNum2];
  // };



