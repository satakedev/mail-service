import { Router } from "express";
import EmailController from "../controllers/email.controller";

class EmailRoutes {
  router = Router();
  controller = new EmailController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.post("/", this.controller.sendMail);
  }
}

export default new EmailRoutes().router;