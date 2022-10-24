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
  // const attackUnit1 = await new AttackUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Light Unit",
  //   maxHealth: 60,
  //   health: 60,
  //   damage: 30,
  //   armor: 1,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 10,
  //   buildTime: 1
  // });
  // attackUnit1.save();
  // console.log("Attack Unit 1 created!");
  // const attackUnit2 = await new AttackUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Medium Unit",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 40,
  //   armor: 2,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 20,
  //   buildTime: 2
  // });
  // attackUnit2.save();
  // console.log("Attack Unit 2 created!");
  // const attackUnit3 = await new AttackUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Heavy Unit",
  //   maxHealth: 150,
  //   health: 150,
  //   damage: 60,
  //   armor: 3,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 30,
  //   buildTime: 3
  // });
  // attackUnit3.save();
  // console.log("Attack Unit 3 created!");
  // const attackUnit4 = await new AttackUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Shield Unit",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 1,
  //   maxShield: 50,
  //   shield: 50,
  //   regen: false,
  //   cost: 30,
  //   buildTime: 3
  // });
  // attackUnit4.save();
  // console.log("Attack Unit 4 created!");
  // const attackUnit5 = await new AttackUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Armor Unit",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 5,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 30,
  //   buildTime: 3
  // });
  // attackUnit5.save();
  // console.log("Attack Unit 5 created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
