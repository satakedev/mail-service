import { Request, Response } from "express";
import HomeUseCase from "../use-cases/home.use-case";

export default class HomeController {
  welcome(req: Request, res: Response): Response {
    const homeUseCase = new HomeUseCase();
    return res.json(homeUseCase.welcome());
  }
}