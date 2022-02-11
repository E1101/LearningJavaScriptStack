import gql from "graphql-tag";
export default gql`
  mutation CloseIssue($issueId: ID!) {
    closeIssue(input: { issueId: $issueId }) {
      issue {
        id
        state
      }
    }
  }
`;
