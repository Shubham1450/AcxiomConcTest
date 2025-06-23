import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.category) {
            alert('Please fill all fields');
            return;
        }
        localStorage.setItem('admin', JSON.stringify(formData));
        alert('Admin Registered Successfully!');
        navigate('/admin/login');
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Event Management System</div>

            <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
                <div style={labelStyle}>Name</div>
                <input
                    type="text"
                    name="name"
                    placeholder="Admin Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <div style={labelStyle}>Email</div>
                <input
                    type="email"
                    name="email"
                    placeholder="Admin Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <div style={labelStyle}>Password</div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <div style={labelStyle}>Category</div>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={inputStyle}
                >
                    <option value="">Select Category</option>
                    <option value="Catering">Catering</option>
                    <option value="Florist">Florist</option>
                    <option value="Decoration">Decoration</option>
                    <option value="Lighting">Lighting</option>
                </select>
            </form>

            <button style={buttonStyle} onClick={handleSubmit}>Sign Up</button>
        </div>
    );
};

const containerStyle = {
    height: '100vh',
    background: 'linear-gradient(to bottom, #ccc, #aaa)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px'
};

const titleStyle = {
    backgroundColor: '#6CA0DC',
    padding: '15px 40px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black',
    marginBottom: '30px'
};

const formStyle = {
    display: 'grid',
    gridTemplateColumns: '150px 300px',
    rowGap: '20px',
    columnGap: '20px',
    alignItems: 'center'
};

const labelStyle = {
    backgroundColor: '#3b74c9',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: 'bold'
};

const inputStyle = {
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    width: '100%',
    fontWeight: 'bold'
};

const buttonStyle = {
    marginTop: '30px',
    backgroundColor: '#3b74c9',
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer'
};

export default AdminSignup;
