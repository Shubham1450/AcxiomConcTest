import React from 'react';

const ProductStatus = () => {

    return (
        <div style={container}>

            <div style={topBar}>
                <button style={topButton}>Home</button>
                <button style={topButton}>LogOut</button>
            </div>


            <div style={title}>Product Status</div>

            <div style={tableHeader}>
                <div style={cell}>Name</div>
                <div style={cell}>E-Mail</div>
                <div style={cell}>Address</div>
                <div style={cell}>Status</div>
                <div style={cell}>Update</div>
                <div style={cell}>Delete</div>
            </div>

            <div style={tableRow}>
                <div style={cell}>John Doe</div>
                <div style={cell}>john@example.com</div>
                <div style={cell}>NY, USA</div>
                <div style={cell}>Pending</div>
                <div style={cell}>Update</div>
                <div style={cell}>Delete</div>
            </div>
        </div>
    );
};


const container = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    padding: '30px',
    fontFamily: 'Arial'
};

const topBar = {
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

const title = {
    backgroundColor: '#3b74c9',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '4px',
    marginBottom: '20px',
    width: '300px',
    margin: '0 auto 30px auto'
};

const tableHeader = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    justifyItems: 'center',
    marginBottom: '10px'
};

const tableRow = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    justifyItems: 'center'
};

const cell = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%'
};
export default ProductStatus;
