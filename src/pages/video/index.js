import React, { useState } from "react";
import getBPM from "../../util/getBPM";

function Video() {
  const [video, setVideo] = useState("");
  async function handleVideo(e) {
    // const path = e.target.value;
    const path = "../assert/dange.MP4";
    const audio = await fetch(`http://localhost:4000/getAudio?path=${path}`);

    // console.log("audio");
    // console.log(audio);
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    // const audioBuffer = await audio.arrayBuffer();
    // const bpm = getBPM(AudioContext, audioBuffer);

    const bpm = await getBPM(AudioContext, "../assert/music.mp3");
    console.log("bpm");
    console.log(bpm);
  }
  handleVideo();
  return <input type="file" accept="video/*" onChange={handleVideo} />;
}
export default Video;
