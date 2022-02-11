let knex: any = null;

async function startDatabase() {
  if (!knex) {
    knex = require('knex')({
      client: 'sqlite3',
      connection: {
        filename: ':memory:',
      },
      useNullAsDefault: true,
    });

    await createDatabase(knex);

    console.log('database initialized');
  }

  return knex;
}

async function createDatabase(knex: any) {
  await knex.schema
    .createTable('artists', (table: any) => {
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
    })
    .createTable('tracks', (table: any) => {
      table.increments('id');
      table.string('title');
      table.integer('artist_id').unsigned().references('artists.id');
    })
    .createTable('playlists', (table: any) => {
      table.increments('id');
      table.string('title');
      table.string('body');
    })
    .createTable('playlists_tracks', (table: any) => {
      table.increments('id');
      table.integer('playlist_id').unsigned().references('playlists.id');
      table.integer('track_id').unsigned().references('tracks.id');
    });

  await knex('artists').insert([
    { id: 1, first_name: 'Mister', last_name: 'Roro' },
    { id: 2, first_name: 'Styled', last_name: 'West' },
    { id: 3, first_name: 'Daddy', last_name: 'Ice' },
  ]);

  await knex('tracks').insert([
    { title: 'Awesome tunes', artist_id: 1 },
    { title: 'Starry Window', artist_id: 2 },
    { title: 'Upbeat vocals', artist_id: 2 },
    { title: 'Rotten', artist_id: 3 },
  ]);

  return true;
}

export default startDatabase;
