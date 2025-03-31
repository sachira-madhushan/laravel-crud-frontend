import React, { useEffect } from 'react';
import Layout from './Layout';
import Posts from './Posts';
import { useState } from 'react';
const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        return () => {
            
        };
    }, []);
    
    return (
        <>  

            <Layout/>
            {
                 isLoggedIn ? (
                    <Posts/>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <h1>Welcome to CRUD App</h1>
                        <p>Please login to continue</p>
                    </div>
                )   
            }
            
        </>
       
    );
};

export default Home;