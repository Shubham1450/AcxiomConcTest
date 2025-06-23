import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product Name",
            price: 100,
            quantity: 2,
            image: "https://via.placeholder.com/100"
        }
    ]);

    const handleQuantityChange = (id, value) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: parseInt(value) } : item
            )
        );
    };

    const handleRemove = id => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const handleDeleteAll = () => {
        setCartItems([]);
    };

    const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/user/UserCheckout');
    };

    return (
        <div style={styles.container}>

            <div style={styles.nav}>
                <button style={styles.navBtn}>Home</button>
                <button style={styles.navBtn}>View Product</button>
                <button style={styles.navBtn}>Request Item</button>
                <button style={styles.navBtn}>Product Status</button>
                <button
                    style={styles.navBtn}
                    onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/login');
                    }}
                >
                    LogOut
                </button>
            </div>

            <h2 style={styles.title}>Shopping Cart</h2>


            <div style={styles.rowHeader}>
                <div>Image</div>
                <div>Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total Price</div>
                <div>Action</div>
            </div>


            {cartItems.map(item => (
                <div key={item.id} style={styles.row}>
                    <img src={item.image} alt="Product" style={styles.image} />
                    <div>{item.name}</div>
                    <div>{item.price}/-</div>
                    <div>
                        <select
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            style={styles.select}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty => (
                                <option key={qty} value={qty}>{qty}</option>
                            ))}
                        </select>
                    </div>
                    <div>{item.price * item.quantity}/-</div>
                    <div>
                        <button style={styles.removeBtn} onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}

            <div style={styles.totalRow}>
                <div style={{ flex: 4 }}>Grand Total</div>
                <div style={{ flex: 1 }}>{grandTotal}/-</div>
                <button onClick={handleDeleteAll} style={styles.deleteAll}>Delete All</button>
            </div>

            <div style={{ textAlign: "center" }}>
                <button onClick={handleCheckout} style={styles.checkout}>Proceed to CheckOut</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        background: '#ccc',
        padding: 20,
        fontFamily: 'Arial'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    navBtn: {
        padding: '10px 20px',
        border: '1px solid green',
        borderRadius: 6,
        background: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    title: {
        textAlign: 'center',
        backgroundColor: '#add8e6',
        padding: 10,
        borderRadius: 4
    },
    rowHeader: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        fontWeight: 'bold',
        marginBottom: 10
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
        backgroundColor: '#3f51b5',
        color: '#fff',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    image: {
        width: 80,
        height: 80
    },
    select: {
        padding: '5px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        textAlign: 'center',
        width: '60px'
    },
    removeBtn: {
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer'
    },
    totalRow: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: 15,
        borderRadius: 6,
        fontWeight: 'bold',
        marginBottom: 20
    },
    deleteAll: {
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        border: '2px solid green',
        color: '#000',
        borderRadius: 5,
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    checkout: {
        padding: '10px 30px',
        backgroundColor: '#fff',
        border: '2px solid green',
        borderRadius: 6,
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

export default Cart;
