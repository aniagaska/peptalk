//https://codepen.io/aniagaska/pen/MWXRKQG 
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const talk = document.querySelector(".talk");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let pepTalk = "Honey, you are a powerful goddess and you can do this!";

const replaceHoney = ["Honey", "Baby", "Sweetheart", "Pumpkin", "Muffin"];

const replacePowerful = [
  "powerful",
  "strong",
  "brave",
  "smart",
  "kind",
  "thoughtful",
  "hard working",
  "practical",
  "creative",
  "loving",
  "funny"
];

const replaceGoddess = [
  "goddess",
  "warrior",
  "princess",
  "queen",
  "king",
  "angel",
  "ballerina",
  "member of society",
  "friend",
  "person",
  "kitty cat",
  "doggy dog",
  "fish",
  "bird",
  "elephant",
  "capybarra"
];

const replacePepTalk = [
  "can do this",
  "will get through this",
  "will laugh about this one day",
  "won't think this will be important one day",
  "will be okay",
  "can quit if that's whats best for you",
  "deserve a rest",
  "deserve a little treat",
  "will figure this out",
  "will get over it sooner than you think",
  "are doing just fine"
];

randomize.addEventListener("click", result);

function result() {
  let newTalk = pepTalk;
  let petName = randomValueFromArray(replaceHoney);
  let description = randomValueFromArray(replacePowerful);
  let randomType = randomValueFromArray(replaceGoddess);
  let randomPepTalk = randomValueFromArray(replacePepTalk);
  newTalk = newTalk.replace("powerful", description);
  newTalk = newTalk.replace("goddess", randomType);
  newTalk = newTalk.replace("can do this", randomPepTalk);

  if (customName.value !== "") {
    const name = customName.value;
    newTalk = newTalk.replace("Honey", name);
  } else {
    newTalk = newTalk.replace("Honey", petName);
  }

  talk.textContent = newTalk;
  talk.style.visibility = "visible";
}
