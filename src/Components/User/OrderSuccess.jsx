import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const userData = location.state?.userData;
    const grandTotal = location.state?.grandTotal;


    if (!userData || !grandTotal) {
        return (
            <div style={styles.container}>
                <h2>Invalid Access</h2>
                <button onClick={() => navigate('/')}>Go to Home</button>
            </div>
        );
    }

    return (
        <div style={styles.container}>

            <h2>THANK YOU</h2>

            <div style={styles.amountBox}>Total Amount: {grandTotal}/-</div>

            <div style={styles.grid}>
                <div style={styles.box}>Name: {userData.name}</div>
                <div style={styles.box}>Number: {userData.number}</div>
                <div style={styles.box}>E-mail: {userData.email}</div>
                <div style={styles.box}>Payment Method: {userData.paymentMethod}</div>
                <div style={styles.box}>Address: {userData.address}</div>
                <div style={styles.box}>State: {userData.state}</div>
                <div style={styles.box}>City: {userData.city}</div>
                <div style={styles.box}>Pin Code: {userData.pinCode}</div>
            </div>

            <button style={styles.continueBtn} onClick={() => navigate('/')}>
                Continue Shopping
            </button>
        </div>
    );
};

const styles = {
    container: {
        background: '#ccc',
        minHeight: '100vh',
        padding: 30,
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    amountBox: {
        background: '#3f51b5',
        color: '#fff',
        padding: 10,
        borderRadius: 6,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 15,
        marginBottom: 30
    },
    box: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: 15,
        borderRadius: 10
    },
    continueBtn: {
        padding: '10px 30px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontWeight: 'bold'
    }
};

export default OrderSuccess;
