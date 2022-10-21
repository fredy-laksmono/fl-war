const db = require("../db");
const { User } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const user1 = await new User({
    name: "F L",
    deck_id: true
  });
  user1.save();

  console.log("Created user!");
};

const run = async () => {
  await main();
  db.close();
};

run();
