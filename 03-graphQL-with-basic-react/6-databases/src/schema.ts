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

  input AddPlaylistInput {
    title: String!
    body: String
  }

  type AddPlaylistPayload {
    id: ID!
    title: String!
    body: String
  }

  input SaveTrackInput {
    playlistId: ID!
    trackId: ID!
  }

  type SaveTrackPayload {
    playlistId: ID!
    playlistTitle: String!
    trackId: ID!
    trackTitle: String!
  }

  type Mutation {
    addPlaylist(input: AddPlaylistInput!): AddPlaylistPayload
    saveTrackToPlaylist(input: SaveTrackInput): SaveTrackPayload
  }
`;
