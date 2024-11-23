import express from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
