import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => (
  <div className="search">
    <div>
      {preload.shows.map(show => (
        <ShowCard
          key={show.imdbID}
          poster={show.poster}
          title={show.title}
          year={show.year}
          description={show.description}
        />
      ))}
    </div>
  </div>
);

export default Search;
