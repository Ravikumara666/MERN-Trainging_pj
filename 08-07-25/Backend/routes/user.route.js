import express from "express";
import { logout, login, ProfileUpdate, register } from "../controller/userController.js";

const router =express.Router();

// User Register
router.route("/register").post( register);

// User Login
router.route("/login").post( login);

// User Logout
router.route("/logout",).get(logout);

// User Profile Update
router.route("/profile/update").post(ProfileUpdate);

export default router;
