import { GraphQLResolveInfo } from 'graphql';
import getFieldNames from 'graphql-list-fields';
import toSnakeCase from 'lodash/snakeCase';

type Context = {
  knex: any;
};

type PlaylistInput = {
  id: string;
};

async function getTracks(
  _: any,
  {},
  { knex }: Context,
  info: GraphQLResolveInfo,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  let fields = getFieldNames(info);
  fields = fields.map((fieldName) =>
    fieldName.startsWith('artist') ? 'artist_id' : fieldName,
  );

  return await knex('tracks').select('id', ...fields);
}

async function getArtist(
  { artist_id: artistId }: any,
  {},
  { knex }: Context,
  info: GraphQLResolveInfo,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  let fields = getFieldNames(info);
  fields = fields.map((fieldName) => toSnakeCase(fieldName));

  console.log('database called', artistId);

  return await knex('artists')
    .where('id', artistId)
    .select('id', ...fields)
    .first();
}

async function getPlaylist(
  _: any,
  { id }: PlaylistInput,
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  const playlist = await knex('playlists').where('id', id).select();

  if (!playlist.length) throw new Error('Playlist not found');

  return playlist[0];
}

async function getTracksByPlaylist(
  { id }: any,
  {}: any,
  { knex }: Context,
): Promise<any> {
  return await knex('playlists_tracks')
    .where('playlist_id', id)
    .join('tracks', 'playlists_tracks.track_id', 'tracks.id')
    .select('tracks.*');
}

async function getTracksByArtist(
  { id }: any,
  {}: any,
  { knex }: Context,
): Promise<any> {
  return await knex('tracks').where('artist_id', id);
}

async function addPlaylist(
  _: any,
  { input }: any,
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  const { title, body } = input;

  const [id] = await knex('playlists').insert({ title, body });

  return {
    id,
    title,
    body,
  };
}

async function saveTrackToPlaylist(
  _: any,
  { input }: any,
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  const { playlistId, trackId } = input;

  const playlist = await knex('playlists').where('id', playlistId).select();
  const track = await knex('tracks').where('id', trackId).select();

  if (!playlist.length)
    return {
      resolveType: 'SaveTrackPlaylistError',
      playlistId,
      message: 'Playlist not found',
    };

  if (!track.length)
    return {
      resolveType: 'SaveTrackError',
      trackId,
      message: 'Track not found',
    };

  await knex('playlists_tracks').insert({
    playlist_id: playlistId,
    track_id: trackId,
  });

  return {
    playlistId,
    playlistTitle: playlist[0].title,
    trackId,
    trackTitle: track[0].title,
  };
}

const resolvers = {
  Track: {
    artist: getArtist,
  },
  Playlist: {
    tracks: getTracksByPlaylist,
  },
  Artist: {
    tracks: getTracksByArtist,
  },
  SaveTrackPayload: {
    __resolveType(obj: any) {
      if (obj.resolveType) return obj.resolveType;

      return 'SaveTrackSuccess';
    },
  },
  Query: {
    tracks: getTracks,
    playlist: getPlaylist,
  },
  Mutation: {
    addPlaylist,
    saveTrackToPlaylist,
  },
};

export default resolvers;
