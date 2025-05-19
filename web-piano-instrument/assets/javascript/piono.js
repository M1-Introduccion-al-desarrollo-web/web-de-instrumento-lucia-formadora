const pianoKeys = document.querySelectorAll(".piono-keys .key");
const volumeslider = document.querySelector(".volume-slider input");
let volume = 1;
const keyMap = {
  a: "01", w: "02", s: "03", e: "04", d: "05", f: "06",
  t: "07", g: "08", y: "09", h: "10", u: "11", j: "12",
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

function playNoteByKey(dataKey) {
  const key = document.querySelector(`.key[data-key="${dataKey}"]`);
  if (key) {
    key.click();
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 300);
  }
}

const twinkle = [
  { key: "01", delay: 0 },     // C
  { key: "01", delay: 400 },   // C
  { key: "08", delay: 800 },   // G
  { key: "08", delay: 1200 },  // G
  { key: "10", delay: 1600 },  // A
  { key: "10", delay: 2000 },  // A
  { key: "08", delay: 2400 },  // G

  { key: "06", delay: 3200 },  // F
  { key: "06", delay: 3600 },  // F
  { key: "05", delay: 4000 },  // E
  { key: "05", delay: 4400 },  // E
  { key: "03", delay: 4800 },  // D
  { key: "03", delay: 5200 },  // D
  { key: "01", delay: 5600 },  // C
];

function playSong(songArray) {
  songArray.forEach(note => {
    setTimeout(() => {
      playNoteByKey(note.key);
    }, note.delay);
  });
}
