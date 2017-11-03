// @flow

import React from 'react';

const Details = (props) => (
  <div className="details">
    <h1>THINGS</h1>
    <pre>{JSON.stringify(props, null, 4)}</pre>
  </div>
);

export default Details;
