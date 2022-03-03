import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO component. 
 * @returns{JSX.Element}
 */

export const SEO = () => (
  <Helmet>
      <meta charSet='UTF-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Pokedex</title>
  </Helmet>
   
);

export default SEO;