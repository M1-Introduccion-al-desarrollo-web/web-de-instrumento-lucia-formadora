const pianoKeys = document.querySelectorAll(".piono-keys .key");
const volumeslider = document.querySelector(".volume-slider input");
let volume = 1;
const keyMap = {
  a: "1", w: "2", s: "3", e: "4", d: "5", f: "6",
  t: "7", g: "8", y: "9", h: "10", u: "11", j: "12",
  k: "13", o: "14", l: "15", p: "16", ";": "17"
};
const keysCheckbox = document.querySelector(".keys-checkbox input");

function playTune(key) {
  const audio = new Audio(`../assets/sound/piano/key${key}.mp3`);
  audio.volume = volume;
  audio.play().catch(err => console.error("Error al reproducir:", err));

  const keyElement = document.querySelector(`[data-key="${key}"]`);
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => keyElement.classList.remove("active"), 150);
  }
}
keysCheckbox.addEventListener("change", () => {
  document.querySelector(".piono-keys").classList.toggle("hide-label");
});

volumeslider.addEventListener("input", (e) => {
  volume = e.target.value;
});


pianoKeys.forEach(key => {
  key.addEventListener("click", () => {
    playTune(key.dataset.key);
  });
});

document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (keyMap[key]) {
    playTune(keyMap[key]);
  }
});


