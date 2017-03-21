import React from 'react';
import DefaultLayout from './layouts/Layout';

const IndexView = ({
  title,
  env
}) =>
  <DefaultLayout title={title} env={env}>
    <div id="react-container"></div>
  </DefaultLayout>;

export default IndexView;
