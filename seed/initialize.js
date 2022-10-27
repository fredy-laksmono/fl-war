const db = require("../db");
const { User } = require("../models");
const { Race } = require("../models");
const { AttackUnit } = require("../models");
const { DefenseUnit } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  // const race1 = await new Race({
  //   name: "Terran",
  //   description: "Your normal human faction where everything is so soso."
  // });
  // await race1.save();
  // console.log("Created race1!");

  // const Scien = await new Race({
  //   name: "Scien",
  //   description:
  //     "A technological advance faction where they required the advancement as a mean to survive. All units and even building will have shield technology to compansate their weak body."
  // });
  // await Scien.save();
  // console.log("Created Scien race!");

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
  // await attackUnit1.save();
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
  // await attackUnit2.save();
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
  // await attackUnit3.save();
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
  // await attackUnit4.save();
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
  // await attackUnit5.save();
  // console.log("Attack Unit 5 created!");

  // const defenseUnit1 = await new DefenseUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Scout Tower",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 2,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 20,
  //   buildTime: 1,
  //   isPowered: false
  // });
  // await defenseUnit1.save();
  // console.log("Scout Tower created!");

  // const defenseUnit2 = await new DefenseUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Heavy Tower",
  //   maxHealth: 200,
  //   health: 200,
  //   damage: 0,
  //   armor: 5,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 40,
  //   buildTime: 2,
  //   isPowered: false
  // });
  // await defenseUnit2.save();
  // console.log("Heavy Tower created!");

  // const defenseUnit3 = await new DefenseUnit({
  //   race_id: "635535d64172fa8cf5010f26",
  //   name: "Shield Tower",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 2,
  //   maxShield: 100,
  //   shield: 100,
  //   regen: false,
  //   cost: 40,
  //   buildTime: 2,
  //   isPowered: false
  // });
  // await defenseUnit3.save();
  // console.log("Shield Tower created!");

  const micron = await new Race({
    name: "Micron",
    description:
      "A primitive faction who like to consume planet and rapidly reproducing. They are weak but able to regenerate their damaged body as long as they do not die."
  });
  await micron.save();
  console.log("Created Micron race!");

  const micronAttackUnit1 = await new AttackUnit({
    race_id: micron.id,
    name: "Vairuse",
    maxHealth: 50,
    health: 50,
    damage: 25,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 3,
    buildTime: 1
  });
  await micronAttackUnit1.save();
  console.log("Micron Attack Unit 1 created!");

  const micronAttackUnit2 = await new AttackUnit({
    race_id: micron.id,
    name: "Bakteri",
    maxHealth: 60,
    health: 60,
    damage: 50,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 10,
    buildTime: 1
  });
  await micronAttackUnit2.save();
  console.log("Micron Attack Unit 2 created!");

  const micronAttackUnit3 = await new AttackUnit({
    race_id: micron.id,
    name: "Arkae",
    maxHealth: 80,
    health: 80,
    damage: 40,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 10,
    buildTime: 1
  });
  await micronAttackUnit3.save();
  console.log("Micron Attack Unit 3 created!");

  const micronAttackUnit4 = await new AttackUnit({
    race_id: micron.id,
    name: "Protein",
    maxHealth: 100,
    health: 100,
    damage: 50,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 15,
    buildTime: 2
  });
  await micronAttackUnit4.save();
  console.log("Micron Attack Unit 4 created!");

  const micronAttackUnit5 = await new AttackUnit({
    race_id: micron.id,
    name: "Fungeon",
    maxHealth: 120,
    health: 120,
    damage: 40,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 15,
    buildTime: 2
  });
  await micronAttackUnit5.save();
  console.log("Micron Attack Unit 5 created!");

  const micronDefenseUnit1 = await new DefenseUnit({
    race_id: micron.id,
    name: "Dirt",
    maxHealth: 60,
    health: 60,
    damage: 40,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 10,
    buildTime: 1,
    isPowered: false
  });
  await micronDefenseUnit1.save();
  console.log("Dirt Tower created!");

  const micronDefenseUnit2 = await new DefenseUnit({
    race_id: micron.id,
    name: "Trunk",
    maxHealth: 80,
    health: 80,
    damage: 50,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 15,
    buildTime: 1,
    isPowered: false
  });
  await micronDefenseUnit2.save();
  console.log("Trunk Tower created!");

  const micronDefenseUnit3 = await new DefenseUnit({
    race_id: micron.id,
    name: "Carcass",
    maxHealth: 100,
    health: 100,
    damage: 50,
    armor: 0,
    maxShield: 0,
    shield: 0,
    regen: true,
    cost: 20,
    buildTime: 1,
    isPowered: false
  });
  await micronDefenseUnit3.save();
  console.log("Carcass Tower created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
