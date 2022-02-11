// `superagent` provides a nice, consistent API for making
// HTTP requests in both the browser and Node.js.
const { post } = require("superagent");

const query = `query {
  viewer {
    login
  }
}`;

const token = process.env.GITHUB_TOKEN;
const headers = {
  "User-Agent": "superagent",
  Authorization: `Bearer ${token}`,
};

async function main() {
  const { body } = await post("https://api.github.com/graphql")
    .set(headers)
    .send({ query });

  console.log(body);
}

main();

// we can run GITHUB_TOKEN=<YOUR_TOKEN> yarn start

