export default interface EmailSenderInterface {
  sendEmail(to: string, body: string, subject: string): Promise<void>;
}