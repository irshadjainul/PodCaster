import { Router } from "express";
const router = Router();
import userController from '../controllers/user.js'
import  authMiddleware  from "../middleware/authMiddleware.js";

router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/logout",userController.logout);
router.get("/check-cookie",userController.checkCookie)

//route to fetch user details
router.get("/userDetails",authMiddleware,userController.userDetails)

export default router;
