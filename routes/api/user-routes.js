const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controllers"); // ===>>> will edit

// set GET all and POST api/users
router.route("/").get(getAllUsers).post(createUser);

// GET one, Put and DELETE /user/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// ADD and Delete :id()friend
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
