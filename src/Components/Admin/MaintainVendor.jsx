import React from 'react';

const MaintainVendor = () => {

    return (
        <div style={container}>

            <div style={leftPanel}>
                <button style={buttonStyle}>Home</button>
                <button style={buttonStyle}>Membership</button>
                <button style={buttonStyle}>User Management</button>
            </div>


            <div style={centerPanel}>
                <div style={group}>
                    <button style={buttonStyle}>Add</button>
                    <button style={buttonStyle}>Update</button>
                </div>
                <div style={group}>
                    <button style={buttonStyle}>Add</button>
                    <button style={buttonStyle}>Update</button>
                </div>
            </div>


            <div style={rightPanel}>
                <button style={buttonStyle}>LogOut</button>
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
    fontWeight: 'bold',
    margin: '10px 0'
};

const container = {
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px 40px'
};

const leftPanel = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
};

const rightPanel = {
    alignSelf: 'flex-start'
};

const centerPanel = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px'
};

const group = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};
export default MaintainVendor;
