import React from 'react';
import DefaultLayout from '../../templates/default-layout/DefaultLayout';
import { Link } from 'react-router-dom';
/**
 * Home component. 
 * @returns{JSX.Element}
 */

 const Home = () => (
 <DefaultLayout title='Home'>
        <h1>Página Principal</h1>
        <Link to='/pokemon/1'>Dummy de acceso a detalles de pokemos</Link>
 </DefaultLayout>
);

export default Home;