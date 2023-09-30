import { Application } from "express";
import emailRoutes from "./email.routes";
import homeRoutes from "./home.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/", homeRoutes);
    app.use("/email", emailRoutes);
  }
}