import detect from "bpm-detective";
const getFileAudioBuffer = require("@soundcut/decode-audio-data-fast");

async function decodeFileAudioData(file) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return await getFileAudioBuffer(file, audioCtx);
}

// getBPM(window.AudioContext || window.webkitAudioContext, "some/audio/file.wav")
export default async function getBPM(AudioContext, path) {
  let context = new AudioContext();

  try {
    // Fetch some audio file
    // const audio = await fetch(path);
    // let audioBuffer = await audio.arrayBuffer();
    // audioBuffer = new Blob([new Uint8Array(audioBuffer)]);

    // Get response as ArrayBuffer
    // Decode audio into an AudioBuffer
    var audioBuffer = new File(["audio"], path);
    console.log("audioBuffer");
    console.log(audioBuffer);
    const data = await decodeFileAudioData(audioBuffer);
    console.log("data");
    console.log(data);

    // Run detection
    return await detect(data);
  } catch (err) {
    console.error("whole error:", err);
  }
}
