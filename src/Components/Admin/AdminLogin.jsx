import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const admin = JSON.parse(localStorage.getItem('admin'));

        if (!admin) {
            alert('No admin registered. Please sign up first.');
            return;
        }

        if (email === admin.email && password === admin.password) {
            alert('Login successful!');
            localStorage.setItem('loggedInAdmin', JSON.stringify(admin));
            navigate('/admin');
        } else {
            alert('Invalid email or password!');
        }
    };
    const handlesignup = () => {
        navigate('/admin/signup');
    }

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Event Management System</div>

            <div style={formGrid}>
                <div style={labelStyle}>User Id</div>
                <input
                    type="text"
                    placeholder="Admin"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div style={labelStyle}>Password</div>
                <input
                    type="password"
                    placeholder="Admin"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div style={buttonRow}>
                <button style={buttonStyle} onClick={() => navigate('/')}>Cancel</button>
                <button style={buttonStyle} onClick={handleLogin}>Login</button>
                <button style={buttonStyle} onClick={handlesignup}>Signup</button>
            </div>
        </div>
    );
};


const containerStyle = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
    fontFamily: 'Arial'
};

const titleStyle = {
    backgroundColor: '#6CA0DC',
    padding: '15px 50px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '40px'
};

const formGrid = {
    display: 'grid',
    gridTemplateColumns: '150px 250px',
    rowGap: '20px',
    columnGap: '20px',
    alignItems: 'center'
};

const labelStyle = {
    backgroundColor: '#3b74c9',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: 'bold'
};

const inputStyle = {
    backgroundColor: '#add8f5',
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center'
};

const buttonRow = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    gap: '20px'
};

const buttonStyle = {
    padding: '12px 30px',
    borderRadius: '8px',
    border: '1px solid black',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#666',
    color: 'white'
};

export default AdminLogin;
