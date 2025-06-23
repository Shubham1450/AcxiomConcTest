import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession, logout } from '../utils/auth';


const UserDashboard = () => {
    const session = getSession();
    const navigate = useNavigate();
    const [showVendorDropdown, setShowVendorDropdown] = useState(false);
    const vendorRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (vendorRef.current && !vendorRef.current.contains(event.target)) {
                setShowVendorDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!session || session.role !== 'user') {
        return <h3>Access Denied</h3>;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', height: '100vh', background: '#ddd' }}>

            <div style={{ width: '200px', padding: '20px', margin: '10px' }} />


            <div style={{ flexGrow: 1, margin: '10px', background: '#cfd8dc', borderRadius: '10px', padding: '20px' }}>

                <div style={{ background: '#1976d2', padding: '10px', color: 'white', borderRadius: '5px', textAlign: 'center' }}>
                    <h3>WELCOME {session.username.toUpperCase()}</h3>
                </div>


                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px', flexWrap: 'wrap' }}>

                    <div style={{ position: 'relative' }} ref={vendorRef}>
                        <button style={btnStyle} onClick={() => setShowVendorDropdown(!showVendorDropdown)}>Vendor</button>
                        {showVendorDropdown && (
                            <ul
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    marginTop: '5px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                                    padding: '10px',
                                    listStyle: 'none',
                                    borderRadius: '6px',
                                    zIndex: 1000,
                                }}
                            >
                                <li style={dropdownItem}>Catering</li>
                                <li style={dropdownItem}>Florist</li>
                                <li style={dropdownItem}>Decoration</li>
                                <li style={dropdownItem}>Lighting</li>
                            </ul>
                        )}
                    </div>

                    <button style={btnStyle} onClick={() => navigate('/user/UserCart')}>Cart</button>
                    <button style={btnStyle} onClick={() => navigate('/user/GuestList')}>Guest List</button>
                    <button style={btnStyle} onClick={() => navigate('/user/OrderStatus')}>Order Status</button>

                </div>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <button style={btnStyle} onClick={handleLogout}>LogOut</button>
                </div>
            </div>
        </div>
    );
};


const btnStyle = {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '10px'
};

const dropdownItem = {
    padding: '5px 10px',
    cursor: 'pointer',
};

export default UserDashboard;
