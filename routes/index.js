const { Router } = require("express");
const router = Router();

const userController = require("../controllers/UserController");

router.get("/", (req, res) => res.send("This is root!"));

router
  .route("/newUser")
  .get((req, res) => res.send("Get new user"))
  .post(userController.createUser);

router.route("/account/:userId").get(userController.getUser);

module.exports = router;
