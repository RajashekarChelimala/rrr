const express = require("express");
const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  // validate all params at once in middlewaare
  console.log(`Id is : ${val}`);
  next();
});

router.get("/", usersControllers.getUsers);
router.post("/signup", usersControllers.checkBody, usersControllers.signup);
router.get("/login", usersControllers.login);

router.post("/forgotPassword", usersControllers.forgotPassword);
router.patch("/resetPassword/:token", usersControllers.resetPassword);
router.patch(
  "/updateMyPassword",
  usersControllers.protect,
  usersControllers.updatePassword
);
router.patch("/updateMe", usersControllers.protect, usersControllers.updateMe);
router.delete("/deleteMe", usersControllers.protect, usersControllers.deleteMe);

module.exports = router;
