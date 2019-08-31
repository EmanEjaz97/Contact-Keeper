const moongose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await moongose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("mongo connected");
  } catch (error) {
    console.log("Output: error", error);
  }
};

module.exports = connectDB;
