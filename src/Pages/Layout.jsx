import React, { useEffect } from 'react';
import axios from 'axios';
const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        return () => {

        };
    }, []);

    const handleLogout = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('/api/users/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };


    return (
        <div className="flex flex-col">
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Laravel CRUD</h1>
                <nav>

                    {
                        isLoggedIn ? (
                            <ul className="flex space-x-4">
                                <li><p className='bg-blue-400 p-1 rounded'>Hello {user.name}</p></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        ) : (
                            <ul className="flex space-x-4">
                                <li><a href="/login" className="hover:underline">Login</a></li>
                                <li><a href="/register" className="hover:underline">Register</a></li>
                            </ul>
                        )

                    }
                </nav>
            </header>

        </div>
    );
};

export default Layout;