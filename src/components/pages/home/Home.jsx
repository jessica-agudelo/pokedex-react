import React from 'react';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';
import { Link } from 'react-router-dom';
/**
 * Home component. 
 * @returns{JSX.Element}
 */

 const Home = () => (
 <DefaultLayout title='Home'>
        <h1>Página Principal</h1>
        <Link to='/pokemon/pikachu'>Ver detalles de pikachu</Link>
 </DefaultLayout>
);

export default Home;