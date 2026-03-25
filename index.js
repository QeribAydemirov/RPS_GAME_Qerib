let scoreMe = document.querySelektor(".scoreMe"),
  scoreCOM = document.querySelector(".scoreCOM"),
  myLastScore = document.querySelector(".myLastScoreMe"),
  comLastScre = document.querySelector(".comLastScore"),
  myChoiseImage = document.querySelector(".myChoiseImg > img"),
  comChoiseImage = document.querySelector(".comChiseImg > img");
let canPress = true;
let maxScore = 0;
let myChoise = null;

let choises = [
  { img: "/assets/image/1.jpg", title: "Rock" },

  {
    img: "/assets/image/2.jpg",
    title: "Paper",
  },

  {
    img: "/assets/image/3.jpg",
    title: "Scissors",
  },
];

class keybordGame {
  comChooseyourChoise() {}

  userChooseYourChoise(key) {
    key = key.toUpperCase();

    this.comChooseyourChoise();

    if (!["r", "p", "s"].includes(key)) {
      alert("R P S - den birini click ede bilersen !!!");
    }

    if (key === "r") {
      myChoise = 0;
    } else if (key === "p") {
      myChoise = 1;
    } else {
      myChoise = 2;
    }

    this.showChoises();
  }

  showChoises() {
    myChoiseImage.src = choises[myChoise].img;
    myChoiseTitle.innerHTML = choises[myChoise].title;

    comChoiseImage.src = choises[comChoise].img;
    myChoiseTitle.innerHTML = choises[comChoise].title;
  }
}

let rpsGame = new keybordGame();

window.addEventListener("keydown", (e) => {
  rpsGame.userChooseYourChoise(e.key);
});
