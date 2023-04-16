const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");
const auth = require("../controllers/register") 
const router = require("express").Router();

router.post("/login", auth.login);
router.post("/register", auth.register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
