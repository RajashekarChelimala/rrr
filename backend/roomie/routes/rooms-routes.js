const express = require("express");

const roomsControllers = require("../controllers/rooms-controllers");

const router = express.Router();

// router.post(
//   "/addnewroom",
//   roomsControllers.uploadRoomImages,
//   roomsControllers.createRoom
// );

router.post(
  "/addnewroom",
  roomsControllers.uploadRoomImages,
  roomsControllers.createRoom
);

router
  .route("/top-5-cheap")
  .get(roomsControllers.aliasTopRooms, roomsControllers.getAllRooms);

router.get("/allrooms", roomsControllers.getAllRooms);
router.get("/:roomId", roomsControllers.getRoomById);
router.get("/rooms/:userId", roomsControllers.getRoomsByUserId);
router.patch("/:roomId", roomsControllers.updateRoomById);
router.delete(
  "/:roomId",
  roomsControllers.protect,
  roomsControllers.deleteRoomById
);

module.exports = router;
