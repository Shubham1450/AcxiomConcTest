import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPortal = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            alert("You must be logged in to access this page.");
            navigate('/user/login');
        }
    }, [navigate]);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/user/login');
    };

    const handleVendorClick = (category) => {
        alert(`Redirecting to ${category} page`);
    };
    const handleCart = () => {
        navigate('/user/UserCart');
    };
    const handleOrderStatus = () => {
        navigate('/userStatus');
    };


    return (
        <div style={containerStyle}>
            <div style={headerStyle}>WELCOME USER</div>

            <div style={navButtonsContainer}>
                <div style={dropdownWrapper}>
                    <button style={buttonStyle} onClick={toggleDropdown}>Vendor ▼</button>
                    {showDropdown && (
                        <div style={dropdownMenu}>
                            <button style={dropdownItem} onClick={() => handleVendorClick("Catering")}>Catering</button>
                            <button style={dropdownItem} onClick={() => handleVendorClick("Light")}>Light</button>
                            <button style={dropdownItem} onClick={() => handleVendorClick("Decoration")}>Decoration</button>
                        </div>
                    )}
                </div>

                <button style={buttonStyle} onClick={handleCart}>Cart</button>
                <button style={buttonStyle}>Guest List</button>
                <button style={buttonStyle} onClick={handleOrderStatus}>Order Status</button>
            </div>

            <div style={logoutContainer}>
                <button style={buttonStyle} onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    );
};
const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    fontFamily: 'Arial',
    padding: '40px 20px'
};

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#6CA0DC',
    padding: '15px 40px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '22px',
    marginBottom: '40px'
};

const navButtonsContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '40px',
    position: 'relative'
};

const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#3b74c9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'relative'
};

const dropdownWrapper = {
    position: 'relative'
};

const dropdownMenu = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#3b74c9',
    borderRadius: '8px',
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)'
};

const dropdownItem = {
    padding: '10px 20px',
    backgroundColor: '#3b74c9',
    color: 'white',
    border: 'none',
    borderBottom: '1px solid white',
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%'
};

const logoutContainer = {
    textAlign: 'center'
};

export default UserPortal;