import { Request, Response } from "express";
import MailGunEmailSender from "../infra/mailgun";
import EmailUseCase from "../use-cases/email.use-case";

export default class EmailController {
  async sendMail(req: Request, res: Response): Promise<Response> {
    const { to, subject, body } = req.body;
    const emailUseCase = new EmailUseCase(new MailGunEmailSender());

    try {
      await emailUseCase.sendEmail(to, subject, body);
      return res.json({ message: "Email sent" });
    } catch (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
  }
}