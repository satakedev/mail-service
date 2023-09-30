import FormData from "form-data";
import MailGun from "mailgun.js";
import EmailSenderInterface from "../interfaces/email-sender.interface";

export default class MailGunEmailSender implements EmailSenderInterface {
  mailGun: MailGun;
  constructor() { 
    this.mailGun = new MailGun(FormData);
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const client = this.mailGun.client({
      username: process.env.MAILGUN_USERNAME ?? '',
      key: process.env.MAILGUN_API_KEY ?? '',
    });
    await client.messages
      .create('sandboxe46d1ba7bd054aa4b016ef21088cacd3.mailgun.org', {
        from: process.env.MAILGUN_SENDER ?? '',
        to: [to],
        subject: subject,
        text: body,
      })
  }
}
