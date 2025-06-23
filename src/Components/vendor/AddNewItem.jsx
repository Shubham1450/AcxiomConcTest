// src/components/vendor/AddItemPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewItem = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (product.name && product.price && product.image) {
            alert('Product Added!');
            setProduct({ name: '', price: '', image: '' });
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <div style={styles.page}>

            <div style={styles.header}>
                <span style={styles.welcome}>Welcome &nbsp; <b>'Vendor Name'</b></span>
                <div>
                    <button style={styles.topBtn} onClick={() => navigate('/productstatus')}>Product Status</button>
                    <button style={styles.topBtn} onClick={() => navigate('/requestItem')}>Request Item</button>
                    <button style={styles.topBtn} onClick={() => navigate('/viewproduct')}>View Product</button>
                    <button style={styles.topBtn} onClick={() => navigate('/')}>Log Out</button>
                </div>
            </div>


            <div style={styles.contentRow}>
                {/* Form */}
                <div style={styles.formBox}>
                    <input
                        style={styles.input}
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                    />
                    <input
                        style={styles.input}
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Product Price"
                    />
                    <input
                        style={styles.input}
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        placeholder="Product Image URL"
                    />
                    <button style={styles.submitBtn} onClick={handleSubmit}>Add The Product</button>
                </div>


                <div style={styles.preview}>
                    <div style={styles.labelRow}>
                        <div style={styles.labelBox}>Product Image</div>
                        <div style={styles.labelBox}>Product Name</div>
                        <div style={styles.labelBox}>Product Price</div>
                        <div style={styles.labelBox}>Action</div>
                    </div>
                    <div style={styles.productRow}>
                        <div style={styles.box}>{product.image ? <img src={product.image} alt="Preview" style={{ width: '100%' }} /> : 'Image'}</div>
                        <div style={styles.box}>{product.name || 'Image Name'}</div>
                        <div style={styles.box}>{product.price ? `Rs/- ${product.price}` : 'Rs/-'}</div>
                        <div style={{ ...styles.box, flexDirection: 'column' }}>
                            <button style={styles.actionBtn}>Delete</button>
                            <button style={styles.actionBtn}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const styles = {
    page: {
        backgroundColor: '#ccc',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
    },
    header: {
        backgroundColor: '#3f51b5',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        borderRadius: '6px',
    },
    welcome: {
        fontSize: '18px',
    },
    topBtn: {
        margin: '0 5px',
        padding: '6px 14px',
        backgroundColor: '#fff',
        border: '2px solid green',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    contentRow: {
        display: 'flex',
        marginTop: '20px',
        gap: '20px',
    },
    formBox: {
        backgroundColor: '#3f51b5',
        padding: '20px',
        borderRadius: '10px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: '#e0e0e0',
        fontSize: '14px',
    },
    submitBtn: {
        backgroundColor: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    preview: {
        flexGrow: 1,
        backgroundColor: '#3f51b5',
        padding: '15px',
        borderRadius: '10px',
        color: 'white',
    },
    labelRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    productRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
    },
    labelBox: {
        width: '120px',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#5c6bc0',
        padding: '5px',
        borderRadius: '6px',
    },
    box: {
        width: '120px',
        height: '100px',
        backgroundColor: '#5c6bc0',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtn: {
        margin: '4px',
        padding: '6px 8px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
};


export default AddNewItem;
