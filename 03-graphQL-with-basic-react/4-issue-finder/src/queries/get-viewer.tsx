import gql from "graphql-tag";
export default gql`
  query GetViewer {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;
