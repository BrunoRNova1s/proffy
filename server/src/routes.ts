import express from "express";
import ClassController from "./controllers/ClassesController";

const routes = express.Router();
const classesController = new ClassController

routes.post("/classes", classesController.create);

export default routes;
