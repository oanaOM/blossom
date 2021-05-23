const { hasuraRequest } = require("./util/hasura");

import { Handler } from "@netlify/functions";


const handler: Handler = async function (event, context) {
  const { user } = event.body ? JSON.parse(event.body) : {user:{}};

  const currentDate = new Date(Date.now())

  const data = await hasuraRequest({
    query: `
     mutation insertUser($user_id: String, $username: String, $email: String, $netlify_id: String, $password: String, $created_on: timestamptz) {
      insert_users(objects: {user_id: $user_id, username: $username, email: $email, netlify_id: $netlify_id, password: $password, created_on: $created_on}) {
        affected_rows
      }
    }
    `,
    variables: {
      user_id: user.id,
      username: user.username,
      email: user.email,
      netlify_id: user.netlify_id,
      password: user.password,
      created_on: currentDate.toLocaleString("en-GB", { timeZone: "UTC" }),
    },
  }).catch((err: string) => console.error(err));

  console.log(">>>>", user);
  console.log(hasuraRequest());

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export {handler}
