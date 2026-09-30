import express from "express";
import {
    register,
    login,
    getAllFaculty,
    updateFaculty,
    deleteFaculty
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", getAllFaculty);

router.put("/:id", updateFaculty);

router.delete("/:id", deleteFaculty);

export default router;