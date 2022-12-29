import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },
    job_role: {
      type: String,
      required: true,
    },
    openings: {
      type: Number,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
