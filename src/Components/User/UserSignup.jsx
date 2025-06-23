import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = () => {
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            alert("All fields are required.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(formData));
        alert("User registered successfully!");
        navigate('/user/login');
    };

    return (
        <div style={containerStyle}>

            <div style={topRow}>
                <button style={topButton}>Chart</button>
                <button style={topButton} onClick={() => navigate('/')}>Back</button>
            </div>


            <div style={titleStyle}>Event Management System</div>

            <div style={formGrid}>
                <div style={labelStyle}>Name</div>
                <input
                    name="name"
                    type="text"
                    placeholder="User"
                    style={inputStyle}
                    value={formData.name}
                    onChange={handleChange}
                />

                <div style={labelStyle}>Email</div>
                <input
                    name="email"
                    type="email"
                    placeholder="User"
                    style={inputStyle}
                    value={formData.email}
                    onChange={handleChange}
                />

                <div style={labelStyle}>Password</div>
                <input
                    name="password"
                    type="password"
                    placeholder="User"
                    style={inputStyle}
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>


            <div style={buttonContainer}>
                <button style={signUpButton} onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
};

const containerStyle = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    fontFamily: 'Arial',
    padding: '20px'
};

const topRow = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
};

const topButton = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px 20px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

const titleStyle = {
    backgroundColor: '#6CA0DC',
    textAlign: 'center',
    padding: '15px 40px',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '0 auto 40px auto',
    maxWidth: '500px'
};

const formGrid = {
    display: 'grid',
    gridTemplateColumns: '150px 300px',
    rowGap: '20px',
    columnGap: '20px',
    justifyContent: 'center',
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
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center'
};

const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
};

const signUpButton = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '12px 30px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
};
export default UserSignup;
