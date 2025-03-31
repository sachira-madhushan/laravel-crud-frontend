import React from 'react';

const Layout = () => {
    return (
        <div className="flex flex-col">
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Laravel CRUD</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/login" className="hover:underline">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="/register" className="hover:underline">
                                Register
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
};

export default Layout;