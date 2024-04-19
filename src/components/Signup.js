// SignUpPage.js
import './Signup.css'
import React, { useState } from 'react';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // Add more fields as needed for sign up

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        // Perform sign up logic (e.g., API call)
        try {
            // Example of a sign-up API call
            const response = await fetch('https://yourapi.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            // Handle sign up success (e.g., redirect to login page)
            console.log('User signed up successfully');
        } catch (error) {
            console.error('Sign up failed:', error);
            // Handle sign up error
        }
    };

    return (
        <div className='main-signup'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className='signup-name'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='signup-pass'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='signup-mail'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* Add more fields as needed for sign up */}
                <button type="submit" className='signup-btn'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
