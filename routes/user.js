import express from "express";

import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.route("/").post(createUser);
routerUser.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

export default routerUser;
