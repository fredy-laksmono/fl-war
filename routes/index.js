const { Router } = require("express");
const router = Router();

const userController = require("../controllers/UserController");

router.get("/", (req, res) => res.send("This is root!"));

// router.get("/newUser", (req, res) => res.send("Creating new user"));
// router.post("/newUser"), userController.createUser;
//router.post("/newUser", (req, res) => res.send(req.body));

router
  .route("/newUser")
  .get((req, res) => res.send("Get new user"))
  .post(userController.createUser);

module.exports = router;
