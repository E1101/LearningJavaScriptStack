module.exports = {
  client: {
    includes: [__dirname + '/src/**/*.tsx'],
    addTypename: true,
    tagName: 'gql',
    service: {
      name: 'github',
      localSchemaFile: 'graphql-schema.json'
    }
  }
}
