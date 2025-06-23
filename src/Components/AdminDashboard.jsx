import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
    const navigate = useNavigate();
    const handleMaintainUser = () => {
        navigate('/admin/maintainUser');
    };
    const handleMaintainVendor = () => {
        navigate('/admin/maintainVendor');
    };
    return (
        <div style={containerStyle}>
            <div style={topRow}>
                <button style={buttonStyle}>Home</button>
                <button style={buttonStyle}>LogOut</button>
            </div>

            <div style={centerRow}>Welcome Admin</div>

            <div style={bottomRow}>
                <button style={buttonStyle} onClick={handleMaintainUser}>Maintain User</button>
                <button style={buttonStyle} onClick={handleMaintainVendor}>Maintain Vendor</button>
            </div>
        </div>
    );
};
const buttonStyle = {
    padding: '10px 20px',
    border: '2px solid green',
    borderRadius: '8px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontWeight: 'bold'
};

const containerStyle = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 0'
};

const topRow = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    padding: '0 30px'
};

const centerRow = {
    marginTop: '20px',
    marginBottom: '40px',
    ...buttonStyle,
    width: '300px'
};

const bottomRow = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%'
};
export default AdminPage;
