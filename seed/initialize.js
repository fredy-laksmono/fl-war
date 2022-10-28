const db = require("../db");
const { User } = require("../models");
const { Race } = require("../models");
const { AttackUnit } = require("../models");
const { DefenseUnit } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  // const terran = await new Race({
  //   name: "Terran",
  //   description: "Your normal human faction where everything is so soso."
  // });
  // await terran.save();
  // console.log("Created terran race!");

  // const terranAttackUnit1 = await new AttackUnit({
  //   race_id: terran.id,
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
  // await terranAttackUnit1.save();
  // console.log("terran Attack Unit 1 created!");
  //
  // const terranAttackUnit2 = await new AttackUnit({
  //   race_id: terran.id,
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
  // await terranAttackUnit2.save();
  // console.log("terran Attack Unit 2 created!");
  //
  // const terranAttackUnit3 = await new AttackUnit({
  //   race_id: terran.id,
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
  // await terranAttackUnit3.save();
  // console.log("terran Attack Unit 3 created!");
  //
  // const terranAttackUnit4 = await new AttackUnit({
  //   race_id: terran.id,
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
  // await terranAttackUnit4.save();
  // console.log("terran Attack Unit 4 created!");
  //
  // const terranAttackUnit5 = await new AttackUnit({
  //   race_id: terran.id,
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
  // await terranAttackUnit5.save();
  // console.log("terran Attack Unit 5 created!");

  // const terranDefenseUnit1 = await new DefenseUnit({
  //   race_id: terran.id,
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
  // await terranDefenseUnit1.save();
  // console.log("Scout Tower created!");

  // const terranDefenseUnit2 = await new DefenseUnit({
  //   race_id: terran.id,
  //   name: "Heavy Tower",
  //   maxHealth: 200,
  //   health: 200,
  //   damage: 70,
  //   armor: 5,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 40,
  //   buildTime: 2,
  //   isPowered: false
  // });
  // await terranDefenseUnit2.save();
  // console.log("Heavy Tower created!");

  // const terranDefenseUnit3 = await new DefenseUnit({
  //   race_id: terran.id,
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
  // await terranDefenseUnit3.save();
  // console.log("Shield Tower created!");

  const scien = await new Race({
    name: "Scien",
    description:
      "A technological advance faction where they required the advancement as a mean to survive. All units and even building will have shield technology to compansate their weak body."
  });
  await scien.save();
  console.log("Created Scien race!");

  const scienAttackUnit1 = await new AttackUnit({
    race_id: scien.id,
    name: "Little Boy",
    maxHealth: 30,
    health: 30,
    damage: 40,
    armor: 1,
    maxShield: 80,
    shield: 0,
    regen: false,
    cost: 15,
    buildTime: 1
  });
  await scienAttackUnit1.save();
  console.log("scien Attack Unit 1 created!");

  const scienAttackUnit2 = await new AttackUnit({
    race_id: scien.id,
    name: "Little Dude",
    maxHealth: 40,
    health: 40,
    damage: 50,
    armor: 1,
    maxShield: 120,
    shield: 120,
    regen: false,
    cost: 25,
    buildTime: 2
  });
  await scienAttackUnit2.save();
  console.log("scien Attack Unit 2 created!");

  const scienAttackUnit3 = await new AttackUnit({
    race_id: scien.id,
    name: "Little Man",
    maxHealth: 50,
    health: 50,
    damage: 60,
    armor: 1,
    maxShield: 150,
    shield: 150,
    regen: false,
    cost: 35,
    buildTime: 3
  });
  await scienAttackUnit3.save();
  console.log("scien Attack Unit 3 created!");

  const scienAttackUnit4 = await new AttackUnit({
    race_id: scien.id,
    name: "Little Glass",
    maxHealth: 40,
    health: 40,
    damage: 200,
    armor: 1,
    maxShield: 100,
    shield: 100,
    regen: false,
    cost: 50,
    buildTime: 4
  });
  await scienAttackUnit4.save();
  console.log("scien Attack Unit 4 created!");

  const scienAttackUnit5 = await new AttackUnit({
    race_id: scien.id,
    name: "Master Mind",
    maxHealth: 70,
    health: 70,
    damage: 70,
    armor: 1,
    maxShield: 250,
    shield: 250,
    regen: false,
    cost: 60,
    buildTime: 4
  });
  await scienAttackUnit5.save();
  console.log("scien Attack Unit 5 created!");

  const scienDefenseUnit1 = await new DefenseUnit({
    race_id: scien.id,
    name: "Shield Tower",
    maxHealth: 10,
    health: 10,
    damage: 60,
    armor: 1,
    maxShield: 200,
    shield: 200,
    regen: false,
    cost: 60,
    buildTime: 1,
    isPowered: false
  });
  await scienDefenseUnit1.save();
  console.log("scien shield Tower created!");

  const scienDefenseUnit2 = await new DefenseUnit({
    race_id: scien.id,
    name: "Shield Sniper Tower",
    maxHealth: 10,
    health: 10,
    damage: 150,
    armor: 1,
    maxShield: 100,
    shield: 100,
    regen: false,
    cost: 50,
    buildTime: 2,
    isPowered: false
  });
  await scienDefenseUnit2.save();
  console.log("scien Heavy Tower created!");

  const scienDefenseUnit3 = await new DefenseUnit({
    race_id: scien.id,
    name: "Small Tower",
    maxHealth: 10,
    health: 10,
    damage: 60,
    armor: 1,
    maxShield: 100,
    shield: 100,
    regen: false,
    cost: 20,
    buildTime: 1,
    isPowered: false
  });
  await scienDefenseUnit3.save();
  console.log("scien Shield Tower created!");

  // const micron = await new Race({
  //   name: "Micron",
  //   description:
  //     "A primitive faction who like to consume planet and rapidly reproducing. They are weak but able to regenerate their damaged body as long as they do not die."
  // });
  // await micron.save();
  // console.log("Created Micron race!");

  // const micronAttackUnit1 = await new AttackUnit({
  //   race_id: micron.id,
  //   name: "Vairuse",
  //   maxHealth: 50,
  //   health: 50,
  //   damage: 25,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 3,
  //   buildTime: 1
  // });
  // await micronAttackUnit1.save();
  // console.log("Micron Attack Unit 1 created!");

  // const micronAttackUnit2 = await new AttackUnit({
  //   race_id: micron.id,
  //   name: "Bakteri",
  //   maxHealth: 60,
  //   health: 60,
  //   damage: 50,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 10,
  //   buildTime: 1
  // });
  // await micronAttackUnit2.save();
  // console.log("Micron Attack Unit 2 created!");

  // const micronAttackUnit3 = await new AttackUnit({
  //   race_id: micron.id,
  //   name: "Arkae",
  //   maxHealth: 80,
  //   health: 80,
  //   damage: 40,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 10,
  //   buildTime: 1
  // });
  // await micronAttackUnit3.save();
  // console.log("Micron Attack Unit 3 created!");

  // const micronAttackUnit4 = await new AttackUnit({
  //   race_id: micron.id,
  //   name: "Protein",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 15,
  //   buildTime: 2
  // });
  // await micronAttackUnit4.save();
  // console.log("Micron Attack Unit 4 created!");

  // const micronAttackUnit5 = await new AttackUnit({
  //   race_id: micron.id,
  //   name: "Fungeon",
  //   maxHealth: 120,
  //   health: 120,
  //   damage: 40,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 15,
  //   buildTime: 2
  // });
  // await micronAttackUnit5.save();
  // console.log("Micron Attack Unit 5 created!");

  // const micronDefenseUnit1 = await new DefenseUnit({
  //   race_id: micron.id,
  //   name: "Dirt",
  //   maxHealth: 60,
  //   health: 60,
  //   damage: 40,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 10,
  //   buildTime: 1,
  //   isPowered: false
  // });
  // await micronDefenseUnit1.save();
  // console.log("Dirt Tower created!");

  // const micronDefenseUnit2 = await new DefenseUnit({
  //   race_id: micron.id,
  //   name: "Trunk",
  //   maxHealth: 80,
  //   health: 80,
  //   damage: 50,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 15,
  //   buildTime 1,
  //   isPowered: false
  // });
  // await micronDefenseUnit2.save();
  // console.log("Trunk Tower created!");

  // const micronDefenseUnit3 = await new DefenseUnit({
  //   race_id: micron.id,
  //   name: "Carcass",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 50,
  //   armor: 0,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: true,
  //   cost: 20,
  //   buildTime: 1,
  //   isPowered: false
  // });
  // await micronDefenseUnit3.save();
  // console.log("Carcass Tower created!");

  // const galaditor = await new Race({
  //   name: "Galaditor",
  //   description:
  //     "A once thought extinct civilization. Comprise of powerful warrior who despise machinery."
  // });
  // await galaditor.save();
  // console.log("Created Galaditor race!");

  // const galaditorAttackUnit1 = await new AttackUnit({
  //   race_id: galaditor.id,
  //   name: "Slavi",
  //   maxHealth: 100,
  //   health: 100,
  //   damage: 40,
  //   armor: 1,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 15,
  //   buildTime: 1
  // });
  // await galaditorAttackUnit1.save();
  // console.log("Galaditor Attack Unit 1 created!");

  // const galaditorAttackUnit2 = await new AttackUnit({
  //   race_id: galaditor.id,
  //   name: "Enforsir",
  //   maxHealth: 120,
  //   health: 120,
  //   damage: 50,
  //   armor: 3,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 25,
  //   buildTime: 2
  // });
  // await galaditorAttackUnit2.save();
  // console.log("Galaditor Attack Unit 2 created!");

  // const galaditorAttackUnit3 = await new AttackUnit({
  //   race_id: galaditor.id,
  //   name: "Haunt",
  //   maxHealth: 120,
  //   health: 120,
  //   damage: 70,
  //   armor: 3,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 40,
  //   buildTime: 2
  // });
  // await galaditorAttackUnit3.save();
  // console.log("Galaditor Attack Unit 3 created!");

  // const galaditorAttackUnit4 = await new AttackUnit({
  //   race_id: galaditor.id,
  //   name: "Vikang",
  //   maxHealth: 150,
  //   health: 150,
  //   damage: 60,
  //   armor: 4,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 50,
  //   buildTime: 3
  // });
  // await galaditorAttackUnit4.save();
  // console.log("Galaditor Attack Unit 4 created!");

  // const galaditorAttackUnit5 = await new AttackUnit({
  //   race_id: galaditor.id,
  //   name: "Herkuas",
  //   maxHealth: 200,
  //   health: 200,
  //   damage: 70,
  //   armor: 5,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 60,
  //   buildTime: 4
  // });
  // await galaditorAttackUnit5.save();
  // console.log("Galaditor Attack Unit 5 created!");

  // const galaditorDefenseUnit1 = await new DefenseUnit({
  //   race_id: galaditor.id,
  //   name: "Arrow tower",
  //   maxHealth: 150,
  //   health: 150,
  //   damage: 60,
  //   armor: 3,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 30,
  //   buildTime: 1,
  //   isPowered: false
  // });
  // await galaditorDefenseUnit1.save();
  // console.log("Arrow Tower created!");

  // const galaditorDefenseUnit2 = await new DefenseUnit({
  //   race_id: galaditor.id,
  //   name: "Stone tower",
  //   maxHealth: 200,
  //   health: 200,
  //   damage: 70,
  //   armor: 4,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 40,
  //   buildTime: 2,
  //   isPowered: false
  // });
  // await galaditorDefenseUnit2.save();
  // console.log("Stone Tower created!");

  // const galaditorDefenseUnit3 = await new DefenseUnit({
  //   race_id: galaditor.id,
  //   name: "Sius tower",
  //   maxHealth: 300,
  //   health: 300,
  //   damage: 100,
  //   armor: 5,
  //   maxShield: 0,
  //   shield: 0,
  //   regen: false,
  //   cost: 70,
  //   buildTime: 4,
  //   isPowered: false
  // });
  // await galaditorDefenseUnit3.save();
  // console.log("Sius Tower created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
