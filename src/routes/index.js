import express from "express";
import employeeRouter from "./employees.js";

const router = express.Router({
  mergeParams: true,
});

router.use("/api/employee", employeeRouter);

export default router;
