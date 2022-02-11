import gql from 'graphql-tag'
export default gql`
  query Repos ($login: String!, $after: String) {
    owner: repositoryOwner(login: $login) {
      repositories(first: 10, after: $after) {
        pageInfo {
          startCursor
          endCursor
        }
        totalCount
        nodes {
          id
          name
          primaryLanguage {
            color
            name
          }
          url
          stargazers(first: 0) {
            totalCount
          }
        }
      }
    }
  }
`;
