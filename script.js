const audioContext = new AudioContext();

let oscillator;
const gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);
gainNode.gain.value = 0.0; // Default volume level (50%)

let isPlaying = false;
audioContext.resume();

const startOscillator = function () {
  oscillator = audioContext.createOscillator(); // Create a new oscillator
  oscillator.type = "sine"; // Set waveform type
  oscillator.frequency.value = 440; // Default frequency (A4)
  oscillator.connect(gainNode); // Connect oscillator to gain
  oscillator.start(); // Start the oscillator
  isPlaying = true;
  // Update button text
};

const stopOscillator = function () {
  if (isPlaying) {
    oscillator.stop(); // Stop the oscillator
    oscillator.disconnect(); // Disconnect it from the gain node
    isPlaying = false;
    // Update button text
  }
};

const updateGain = function (event) {
  let sliderValue = document.getElementById("gain").value; // Get the slider value (in dB)
  sliderValue = parseFloat(sliderValue); // Convert string input to a number
  gainNode.gain.linearRampToValueAtTime(
    dbtoa(sliderValue),
    audioContext.currentTime + 0.05
  );
  // Convert dB to amplitude and smoothly update gain over 50ms
};

const updateFreq = function (event) {
  oscillator.frequency.value = parseFloat(event.target.value);
  let fd = document.getElementById("freqDisplay");
  fd.innerText = `${oscillator.frequency.value} Hz`;
};

const dbtoa = function (db) {
  return Math.pow(10, db / 20); // Convert dB to linear amplitude
};

document.getElementById("stopbutton").addEventListener("click", stopOscillator);
document
  .getElementById("startbutton")
  .addEventListener("click", startOscillator);
document.getElementById("gain").addEventListener("input", updateGain);
document.getElementById("freq").addEventListener("change", updateFreq);
