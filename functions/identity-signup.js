const { hasuraRequest } = require("./util/hasura");

exports.handler = async function (event) {
   const { user } = JSON.parse(event.body);
  const currentDate = new Date(Date.now());

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
  }).catch((err) => console.error(err));

  console.log(">>>>", user);


  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

