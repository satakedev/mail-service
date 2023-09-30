import SparkPost from "sparkpost";
import EmailSenderInterface from "../interfaces/email-sender.interface";

export default class SparkPostEmailSender implements EmailSenderInterface {
  client: SparkPost;
  constructor() {
      this.client = new SparkPost(process.env.SPARKPOST_API_KEY);
  }
  async sendEmail(to: string, subject: string, body: string) {
      await this.client.transmissions.send({
          options: {
              sandbox: true
          },
          content: {
              from: process.env.SPARKPOST_SENDER,
              subject,
              html: body
          },
          recipients: [{ address: to }]
      });
  }
}