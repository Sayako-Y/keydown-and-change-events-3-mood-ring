var body = document.querySelector("body");
var moodSelector = document.querySelector("#moods");
//console.log(body);
//console.log(moods);

moodSelector.addEventListener("change", function (e) {
  mood = e.target.value;
  if (mood === "happy") {
    body.classList.add("happy");
    body.classList.remove("sad");
    body.classList.remove("passionate");
  } else if (mood === "sad") {
    body.classList.add("sad");
    body.classList.remove("passionate");
    body.classList.remove("happy");
  } else if (mood === "passionate") {
    body.classList.add("passionate");
    body.classList.remove("happy");
    body.classList.remove("sad");
  }
});
