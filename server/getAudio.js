// import extractAudio from "ffmpeg-extract-audio";
const extractAudio = require("ffmpeg-extract-audio");

module.exports = async function getAudio(filePath) {
  return await extractAudio({
    input: filePath
  });
};
