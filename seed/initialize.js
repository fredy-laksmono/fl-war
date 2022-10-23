const db = require("../db");
const { User } = require("../models");
const { Race } = require("../models");
const { AttackUnit } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  // const race1 = await new Race({
  //   name: "Terran"
  // });
  // race1.save();
  // console.log("Created race1!");

  const attackUnit1 = await new AttackUnit({
    race_id: "635535d64172fa8cf5010f26",
    name: "Light Unit",
    maxHealth: 60,
    health: 60,
    damage: 30,
    armor: 1,
    maxShield: 0,
    shield: 0,
    regen: false,
    cost: 10,
    buildTime: 1
  });
  attackUnit1.save();
  console.log("Attack Unit 1 created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
