type Context = {
  knex: any;
};

type PlaylistInput = {
  id: string;
};

type Pagination = {
  limit?: number;
  page?: number;
};

async function getTracks(
  _: any,
  { limit, page = 1 }: Pagination,
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');

  if (page && limit) {
    const offset = page - 1 * limit;
    return await knex('tracks').select().limit(limit).offset(offset);
  }

  return await knex('tracks').select();
}

async function getArtist(
  { artist_id: artistId }: any,
  {},
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');
  const artist = await knex('artists')
    .where('id', artistId)
    .select('id', 'first_name as firstName', 'last_name as lastName');

  return artist[0];
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
    .select('tracks.id', 'tracks.title');
}

async function addPlaylist(
  _: any,
  { title, body }: any,
  { knex }: Context,
): Promise<any> {
  if (!knex) throw new Error('Not connected to the database');
  
  const [id] = await knex('playlists').insert({ title, body });

  return {
    id,
    title,
    body,
  };
}

const resolvers = {
  Track: {
    artist: getArtist,
  },
  Playlist: {
    tracks: getTracksByPlaylist,
  },
  Query: {
    tracks: getTracks,
    playlist: getPlaylist,
  },
  Mutation: {
    addPlaylist,
  },
};

export default resolvers;
