/* eslint-disable @typescript-eslint/no-require-imports*/
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}
