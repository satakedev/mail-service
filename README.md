# Email Microservice Readme

This Email Microservice is designed to facilitate the sending of emails in a flexible and scalable manner. It leverages the principles of Hexagonal Architecture to decouple the core email sending logic from the external email service providers, making it easy to switch between different email service providers. Currently, two email service providers, SparkPost and Mailgun, are implemented as adapters for sending emails.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Environment Variables](#environment-variables)

## Overview

The Email Microservice follows the Hexagonal Architecture, separating the core domain logic from the external dependencies (adapters). The core functionality of this microservice is to send emails, and it abstracts the communication with different email service providers, allowing easy integration of additional providers in the future.

### Key Features

- **Modularity:** The microservice is designed to be highly modular and extensible, making it simple to add new email service providers.
- **Adapter Pattern:** The microservice uses adapters to interface with external email service providers, enabling easy integration with SparkPost and Mailgun.
- **Flexibility:** You can choose the email service provider to use by configuring the service without making changes to the core email sending logic.

## Getting Started

To get started with this Email Microservice, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the email service provider of your choice (SparkPost or Mailgun) in the `config.js` file (see [Configuration](#configuration) for details).

4. Start the microservice:

   ```bash
   npm start
   ```

Now, the microservice should be running and ready to send emails using the configured email service provider.

## Usage

To send an email using this microservice, make a POST request to the `/email` endpoint with the following JSON payload:

```json
{
  "to": "recipient@example.com",
  "subject": "Your Subject",
  "body": "Your plain text message",
}
```

### Example Request

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "to": "recipient@example.com",
  "subject": "Hello",
  "body": "This is a plain text email",
}' http://localhost:8080/email
```

### Example Response

```json
{
  "message": "Email sent successfully"
}
```

## Environment Variables

To configure the Email Microservice, use the following environment variables:

- `PORT`: The port on which the microservice should listen for incoming requests.
- `SPARKPOST_API_KEY`: The API key for SparkPost (if using SparkPost as the email service provider).
- `SPARKPOST_SENDER`: The sender's email address for SparkPost.
- `MAILGUN_API_KEY`: The API key for Mailgun (if using Mailgun as the email service provider).
- `MAILGUN_USERNAME`: The Mailgun username (usually your domain).
- `MAILGUN_SENDER`: The sender's email address for Mailgun.

Copy the provided `.env_example` file and configure these environment variables according to your setup before starting the microservice.

---

Feel free to reach out if you have any questions or need further assistance with using or extending this Email Microservice.
