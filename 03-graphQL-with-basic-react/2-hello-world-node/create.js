const { post } = require("superagent");

const CREATE_REPO_QUERY = `mutation CreateRepository($name: String!, $description: String!) {
  createRepository(input: {name: $name, description: $description, visibility: PUBLIC}) {
  	repository{
      id
    }
  }
}`;

const token = process.env.GITHUB_TOKEN;
const headers = {
  "User-Agent": "superagent",
  Authorization: `Bearer ${token}`,
};

async function main() {
  // remove first two args because: argv[0] === 'node' and argv[1] === 'create.js'
  const [name, description] = process.argv.slice(2); 
  const { body } = await post("https://api.github.com/graphql")
    .set(headers)
    .send({
      query: CREATE_REPO_QUERY,
      variables: {
        name,
        description,
      },
    });

  console.log(body);
}

main();
