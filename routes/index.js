const { Router } = require("express");
const router = Router();

const userController = require("../controllers/UserController");
const raceController = require("../controllers/RaceController");
const attackUnitController = require("../controllers/AttackUnitController");
const defenseUnitController = require("../controllers/DefenseUnitController");

router.get("/", (req, res) => res.send("This is root!"));

router
  .route("/newUser")
  .get((req, res) => res.send("Get new user"))
  .post(userController.createUser);

router.route("/account/:userId").get(userController.getUser);

router
  .route("/race")
  .get(raceController.getAllRace)
  .post(raceController.createRace);

router
  .route("/attackUnit")
  .get(attackUnitController.getAllAttackUnits)
  .post(attackUnitController.createAttackUnit);

router
  .route("/attackUnit/:race")
  .get(attackUnitController.getAllAttackUnitRace);

router
  .route("/defenseUnit")
  .get(defenseUnitController.getAllDefenseUnits)
  .post(defenseUnitController.createDefenseUnit);

module.exports = router;
