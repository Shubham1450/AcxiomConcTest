// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        paymentMethod: 'UPI'
    });

    const totalAmount = 200;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        navigate('/user/order/sucess', {
            state: {
                userData: formData,
                grandTotal: totalAmount
            }
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.summary}>
                <h3>Item Grand Total</h3>
                <p>{totalAmount}/-</p>
                <button style={styles.button}>Details</button>
            </div>

            <div style={styles.form}>
                <div style={styles.column}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} style={styles.input} />
                    <input type="email" name="email" placeholder="E-mail" onChange={handleChange} style={styles.input} />
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} style={styles.input} />
                    <input type="text" name="city" placeholder="City" onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.column}>
                    <input type="text" name="number" placeholder="Number" onChange={handleChange} style={styles.input} />
                    <select name="paymentMethod" onChange={handleChange} style={styles.input}>
                        <option value="UPI">UPI</option>
                        <option value="Credit">Credit</option>
                        <option value="Cash">Cash</option>
                    </select>
                    <input type="text" name="state" placeholder="State" onChange={handleChange} style={styles.input} />
                    <input type="text" name="pincode" placeholder="Pin Code" onChange={handleChange} style={styles.input} />
                </div>
            </div>

            <button onClick={handleSubmit} style={styles.orderBtn}>Order Now</button>
        </div>
    );
};

const styles = {
    container: {
        background: '#ccc',
        padding: 20,
        fontFamily: 'Arial'
    },
    summary: {
        textAlign: 'center',
        marginBottom: 20
    },
    form: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    input: {
        padding: 10,
        borderRadius: 6,
        border: 'none',
        backgroundColor: '#3f51b5',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        padding: '10px 20px',
        marginTop: 10,
        backgroundColor: '#3f51b5',
        color: '#fff',
        borderRadius: 6,
        border: 'none',
        cursor: 'pointer'
    },
    orderBtn: {
        display: 'block',
        margin: '0 auto',
        padding: '10px 30px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        borderRadius: 6,
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default Checkout;
