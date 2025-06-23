import React from 'react';

const RequestItem = () => {


    return (
        <div style={container}>
            <div style={header}>
                <button style={navButton}>Home</button>
                <div style={centerButton}>
                    <button style={navButton}>Request Item</button>
                </div>
                <button style={navButton}>LogOut</button>
            </div>


            <div style={itemsContainer}>
                <div style={itemBox}>Item 1</div>
                <div style={itemBox}>Item 2</div>
                <div style={itemBox}>Item 3</div>
                <div style={itemBox}>Item 4</div>
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

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
};

const centerButton = {
    flex: '1',
    textAlign: 'center'
};

const navButton = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px 25px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '0 10px'
};

const itemsContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '0 40px'
};

const itemBox = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '40px 20px',
    borderRadius: '8px',
    width: '120px',
    textAlign: 'center',
    fontWeight: 'bold'
};
export default RequestItem;
