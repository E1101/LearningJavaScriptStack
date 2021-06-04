import { useMutation, gql } from "@apollo/client";

const UPDATE_DESCRIPTION_QUERY = gql`
  mutation updateDescription($repositoryId: ID!, $description: String!) {
    updateRepository(
      input: { repositoryId: $repositoryId, description: $description }
    ) {
      repository {
        id
        description
      }
    }
  }
`;

export const useUpdateRepoDescription = (variables = {}) =>
  useMutation(UPDATE_DESCRIPTION_QUERY, {
    variables,
  });
