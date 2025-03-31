import React from 'react';
import Layout from './Layout';

const Home = () => {
    return (
        <>
            <Layout/>
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to CRUD App</h1>
                <p>Please login to continue</p>
            </div>
        </>
       
    );
};

export default Home;