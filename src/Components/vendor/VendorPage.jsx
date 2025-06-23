// src/components/VendorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorPage = () => {
    const navigate = useNavigate();

    const vendors = [
        { id: 1, name: 'Vendor 1', contact: 'vendor1@example.com' },
        { id: 2, name: 'Vendor 2', contact: 'vendor2@example.com' },
        { id: 3, name: 'Vendor 3', contact: 'vendor3@example.com' },
        { id: 4, name: 'Vendor 4', contact: 'vendor4@example.com' },
    ];

    return (
        <div style={styles.page}>

            <div style={styles.headerRow}>
                <button style={styles.outlinedButton} onClick={() => navigate('/user')}>Home</button>

                <div style={styles.tabButtons}>
                    <button style={styles.tabButton}>Vendor</button>
                    <button style={styles.tabButton}>Florist</button>
                </div>

                <button style={styles.outlinedButton} onClick={() => navigate('/')}>LogOut</button>
            </div>


            <div style={styles.vendorContainer}>
                {vendors.map((vendor) => (
                    <div key={vendor.id} style={styles.vendorCard}>
                        <h3>{vendor.name}</h3>
                        <p>Contact Details</p>
                        <button style={styles.shopButton} onClick={() => alert(`${vendor.name} shopping`)}>Shop Item</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
const styles = {
    page: {
        backgroundColor: '#d3d3d3',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },

    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
    },

    outlinedButton: {
        padding: '10px 20px',
        border: '2px solid green',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
    },

    tabButtons: {
        display: 'flex',
        gap: '10px',
    },

    tabButton: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: '10px 25px',
        borderRadius: '10px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
    },

    vendorContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        paddingTop: '20px',
    },

    vendorCard: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: '20px',
        borderRadius: '25px',
        textAlign: 'center',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },

    shopButton: {
        marginTop: '10px',
        padding: '8px 16px',
        border: '2px solid green',
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
        borderRadius: '6px',
        cursor: 'pointer',
    },
};


export default VendorPage;
