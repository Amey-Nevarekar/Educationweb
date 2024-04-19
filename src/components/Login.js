import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Simulate API call to login endpoint
        try {
            const response = await fetch('https://yourapi.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            // Assuming API returns user data upon successful login
            const userData = await response.json();
            console.log(userData); // You may want to store user data in state or localStorage

            setIsLoggedIn(true);
        } catch (error) {
            setError('Invalid username or password');
            console.error('Login failed:', error);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Clear user data from state or localStorage
    };

    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome, {username}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className='main-login'>
            <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <form onSubmit={handleLogin}>
                <div className='login-usename'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='login-pass'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className='login-btn'>Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default LoginPage;


