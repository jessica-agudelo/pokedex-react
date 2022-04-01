import React from 'react';
import { Helmet } from 'react-helmet';


/**
 * SEO component. 
 * @param{{title: string}}props
 * @returns{JSX.Element}
 */
 const SEO = (props) => {
  let title = props.title ? 'Pokedex - ${props.title}' : 'Pokedex';
  return(
    <Helmet>
      <meta charSet='UTF-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>title</title>
      <link rel='favicon' href='/favicon.ico' />
    </Helmet>
 );
};

export default SEO;