import Job from "../model/Job.js";

export const getJob = async (req, res) => {
  const job_title = req.query.role;
  const location = req.query.location;
  try {
    let data;
    if (job_title && location) {
      data = await Job.find({ job_title, location });
    } else if (job_title) {
      data = await Job.find({ job_title });
    } else if (location) {
      data = await Job.find({ location });
    } else {
      data = await Job.find({});
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
  //   let data;
  // try {
  //   const data = await Job.find();
  //   res.status(200).json(data);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
};

export const createJob = async (req, res) => {
  try {
    const jobs = await Job.create(req.body);
    res.status(201).json(jobs);
  } catch (error) {
    console.log(error.message);
  }
};

export const singleJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const job = await Job.findOne({ _id: jobId });
    res.status(200).json(job);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const job = await Job.findOneAndDelete({ _id: jobId });
    res.status(200).json(job);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateJob = async (req, res) => {
  const { id: jobId } = req.params;

  try {
    const job = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
      new: true,
    });
    res.status(200).json({ job });
  } catch (error) {}
};
