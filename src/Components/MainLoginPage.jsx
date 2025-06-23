import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainLoginPage = () => {
    const navigate = useNavigate();

    const handleAdmin = () => {
        navigate('/admin/login');
    };
    const handleUser = () => {
        navigate('/user/login');
    };
    const handleVendor = () => {
        navigate('/vendor/login');
    };
    return (
        <div style={containerStyle}>
            <div style={headingStyle}>Select Login Type</div>
            <button style={buttonStyle} onClick={handleAdmin}>Admin</button>
            <button style={buttonStyle} onClick={handleUser}>User</button>
            <button style={buttonStyle} onClick={handleVendor}>Vendor</button>
        </div>
    );
};

const buttonStyle = {
    padding: '15px 30px',
    margin: '15px',
    borderRadius: '10px',
    border: '2px solid green',
    backgroundColor: 'white',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #ccc, #aaa)'
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '30px'
};


export default MainLoginPage;
