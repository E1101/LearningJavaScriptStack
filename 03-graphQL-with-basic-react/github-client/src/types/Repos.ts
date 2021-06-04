/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Repos
// ====================================================

export interface Repos_owner_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Repos_owner_repositories_nodes_primaryLanguage {
  __typename: "Language";
  /**
   * The color defined for the current language.
   */
  color: string | null;
  /**
   * The name of the current language.
   */
  name: string;
}

export interface Repos_owner_repositories_nodes_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface Repos_owner_repositories_nodes {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: Repos_owner_repositories_nodes_primaryLanguage | null;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: Repos_owner_repositories_nodes_stargazers;
}

export interface Repos_owner_repositories {
  __typename: "RepositoryConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: Repos_owner_repositories_pageInfo;
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of nodes.
   */
  nodes: (Repos_owner_repositories_nodes | null)[] | null;
}

export interface Repos_owner {
  __typename: "Organization" | "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: Repos_owner_repositories;
}

export interface Repos {
  /**
   * Lookup a repository owner (ie. either a User or an Organization) by login.
   */
  owner: Repos_owner | null;
}

export interface ReposVariables {
  login: string;
  after?: string | null;
}
