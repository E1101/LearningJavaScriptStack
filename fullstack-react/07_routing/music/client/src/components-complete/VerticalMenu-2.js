import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/VerticalMenu.css';

// leanpub-start-insert
const VerticalMenu = ({ albums, albumsPathname }) => (
  // leanpub-end-insert
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {
      albums.map((album) => (
        <Link
          leanpub-start-insert='🐬'
          to={`${albumsPathname}/${album.id}`}
          leanpub-end-insert='🐬'
          className='item'
          key={album.id}
        >
          {album.name}
        </Link>
      ))
    }
  </div>
);

export default VerticalMenu;
