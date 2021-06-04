import { gql } from 'apollo-server-express';

export default gql`
  type Track {
    id: ID!
    title: String!
    artist: Artist
  }

  type Artist {
    id: ID!
    firstName: String!
    lastName: String!
    name: String!
  }

  type Playlist {
    id: ID!
    title: String!
    body: String
    tracks: [Track]
  }

  type Query {
    tracks(limit: Int, page: Int): [Track]
    playlist(id: ID!): Playlist
  }
`;
