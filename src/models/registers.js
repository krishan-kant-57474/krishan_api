const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
  ExerciseApi: [],
});

playlistSchema.methods.generateAuthToken = async function (data) {
  try {
    const { image, type, name1, name2, videoUrl, time } = data;

    this.ExerciseApi = this.ExerciseApi.concat({
      bicepsExerciseImage: {
        image: image,
        bicepsExercise: [
          {
            type: type,
            name: name1,
            time: time,
            videoUrl: videoUrl,
            image: image,
          },
          {
            type: type,
            name: name2,
            time: time,
            videoUrl: videoUrl,
            image: image,
          },
        ],
      },
    });

    await this.save();
  } catch (error) {
    res.send("the error part" + error);
    console.log("the error part" + error);
  }
};

const Playlist = new mongoose.model("Krishdata", playlistSchema);

module.exports = Playlist;
