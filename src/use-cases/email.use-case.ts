import EmailSenderInterface from "../interfaces/email-sender.interface";

export default class EmailUseCase {
  constructor(readonly emailSender: EmailSenderInterface) { }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    try {
      await this.emailSender.sendEmail(to, subject, body);
    } catch (error) {
      console.log(error);
      throw new Error(`Error sending email`);
    }
  }
}