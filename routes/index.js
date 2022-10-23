const { Router } = require("express");
const router = Router();

const userController = require("../controllers/UserController");
const raceController = require("../controllers/RaceController");

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

module.exports = router;
