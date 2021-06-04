const {
  REACT_APP_GITHUB_USERNAME: user, 
  REACT_APP_GITHUB_TOKEN: token
} = process.env

if (user == '' || token == '') {
  throw "$REACT_APP_GITHUB_USERNAME or $REACT_APP_GITHUB_TOKEN not defined"
}

const auth = 
  new Buffer(`${user}:${token}`)
    .toString('base64')

module.exports = {
  client: {
    includes: [__dirname+'/src/**/*.tsx'],
    addTypename: true,
    tagName: 'gql',
    service: {
      localSchemaFile: 'schema.json',
      endopint: "https://api.github.com/graphql",
      headers: {
        authorization: `Basic ${auth}`
      },
    }
  },
};
