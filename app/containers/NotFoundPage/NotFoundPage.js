/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default function NotFound() {
  return (
    <article>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <h1>Page not found.</h1>
    </article>
  );
}
