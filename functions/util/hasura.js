const fetch = require('node-fetch');

exports.hasuraRequest = async function ({ query, variables = {} }) {
  const result = await fetch(process.env.HASURA_URL, {
    method: "POST",
    headers: {
      "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .catch((err) => new Error("Ups, something went wrong in hasura: ", err));

    // TODO: see if  it's better to return the error or log it on the server and return an empty array
    //   if (!result || !result.data) {
    //     console.error(result);
    //     return [];
    //   }

  return result;
};
