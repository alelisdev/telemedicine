import React, { Fragment } from 'react';
const Spinner = () => (
  <Fragment>
    <img
      src='../images/spinner.gif'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
