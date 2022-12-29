import express from "express";

const router = express.Router();
import {
  getJob,
  createJob,
  singleJob,
  deleteJob,
  updateJob,
} from "../controller/jobs.js";

router.route("/").get(getJob).post(createJob);
router.route("/:role/:location").get(getJob);
router.route("/:id").get(singleJob).delete(deleteJob).patch(updateJob);

export default router;
