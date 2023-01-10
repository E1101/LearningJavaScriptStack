import React from 'react';

// leanpub-start-insert
import { NavLink } from 'react-router-dom';
// leanpub-end-insert

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ albums, albumsPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {
      albums.map((album) => (
        // leanpub-start-insert
        <NavLink
          leanpub-end-insert=''
          to={`${albumsPathname}/${album.id}`}
          leanpub-start-insert=''
          activeClassName='active'
          leanpub-end-insert=''
          className='item'
          key={album.id}
        >
          {album.name}
          {/* leanpub-start-insert */}
        </NavLink>
        // leanpub-end-insert
      ))
    }
  </div>
);

export default VerticalMenu;
