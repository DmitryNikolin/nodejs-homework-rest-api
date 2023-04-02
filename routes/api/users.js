const express = require("express");

const { auth, upload } = require("../../middlewares");
const { validation, ctrlWrapper } = require("../../helpers");
const { subscriptionSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");
const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/subscription",
  auth,
  validation(subscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.setAvatar)
);

module.exports = router;
