// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MaintenanceMenu = () => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('admin');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !password) {
            alert('Please fill all fields');
            return;
        }

        localStorage.setItem('sessionUser', JSON.stringify({ username, role }));

        if (role === 'admin') navigate('/admin');
        else if (role === 'user') navigate('/user');
        else if (role === 'vendor') navigate('/vendor');
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
            </select>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default MaintenanceMenu;
