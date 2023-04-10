const express = require("express");

const { auth } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../helpers");
const { registerSchema, loginSchema } = require("../../models/user");

const router = express.Router();

// signup (always post)
router.post(
  "/register",
  validation(registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", ctrlWrapper(ctrl.resendVerifyEmail));

// signin
router.post("/login", validation(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
