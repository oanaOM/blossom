import { Handler } from "@netlify/functions";
const {hasuraRequest} = require("./util/hasura");

const handler: Handler = async (event, context) => {
  const plant = event.body ? JSON.parse(event.body) : { user: {} };

  const data = await hasuraRequest({
    query:
    `mutation insertUserPlant($plant_name: String, $user_id: String) {
        insert_plants_one(object: {plant_name: $plant_name, user_id: $user_id}) {
            plant_name
            user_id
        }
    }`,
    variables: {
      plant_name: plant.plant_name,
      user_id: plant.user_id,
    },
  });

  console.log("A plant has been added to user", data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
