import { Unsend } from "unsend";
import { render } from "@react-email/render";
import { Email } from "./email";

const unsend = new Unsend("us_replace_with_your_api_key");

async function sendEmail() {
  console.log("sendEmail");

  const html = await render(Email({ url: "https://unsend.dev" }));

  const response = await unsend.emails.send({
    to: "hello@unsend.dev",
    from: "hello@unsend.dev",
    subject: "Unsend email",
    html,
  });

  console.log({ data: response.data, error: response.error });
}

sendEmail();
