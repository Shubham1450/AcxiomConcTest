import React from 'react';

const UserOrderStatus = () => {

    return (
        <div style={container}>

            <div style={topBar}>
                <button style={navButton}>Home</button>
                <button style={navButton}>LogOut</button>
            </div>


            <div style={titleStyle}>User Order Status</div>


            <div style={gridHeader}>
                <div style={cellStyle}>Name</div>
                <div style={cellStyle}>E-mail</div>
                <div style={cellStyle}>Address</div>
                <div style={cellStyle}>Status</div>
            </div>

            <div style={gridRow}>
                <div style={cellStyle}>Aman Singh</div>
                <div style={cellStyle}>aman@example.com</div>
                <div style={cellStyle}>Lucknow, India</div>
                <div style={cellStyle}>Shipped</div>
            </div>
        </div>
    );
};
const container = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    fontFamily: 'Arial',
    padding: '30px'
};

const topBar = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
};

const navButton = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px 25px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const titleStyle = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '12px 40px',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px auto',
    width: 'fit-content'
};

const gridHeader = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyItems: 'center',
    marginTop: '20px',
    marginBottom: '10px'
};

const gridRow = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyItems: 'center'
};

const cellStyle = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '12px 15px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
};

export default UserOrderStatus;
