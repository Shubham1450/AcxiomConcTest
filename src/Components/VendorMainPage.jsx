// src/components/vendor/VendorMainPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorMainPage = () => {
    const navigate = useNavigate();

    return (
        <div style={container}>
            <h2 style={header}>Vendor Main Page</h2>
            <div style={buttonContainer}>
                <button onClick={() => navigate('your-items')} style={btn}>Your Item</button>
                <button onClick={() => navigate('add-new-item')} style={btn}>Add New Item</button>
                <button onClick={() => navigate('transaction')} style={btn}>Transaction</button>
            </div>
        </div>
    );
};

const container = { textAlign: 'center', padding: '40px' };
const header = { marginBottom: '30px' };
const buttonContainer = { display: 'flex', justifyContent: 'center', gap: '30px' };
const btn = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '10px',
    backgroundColor: '#1976d2',
    color: '#fff',
    cursor: 'pointer',
};

export default VendorMainPage;
