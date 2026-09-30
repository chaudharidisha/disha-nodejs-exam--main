import express from "express";
import auth from "../middleware/auth.js";

import {
    markAttendance,
    getTodayAttendance,
    getAttendanceByDate,
    updateAttendance,
    deleteAttendance
} from "../controllers/attendance.controller.js";

const router = express.Router();

router.post("/", auth, markAttendance);

router.get("/today", auth, getTodayAttendance);

router.get("/:date", auth, getAttendanceByDate);

router.put("/:id", auth, updateAttendance);

router.delete("/:id", auth, deleteAttendance);

export default router;