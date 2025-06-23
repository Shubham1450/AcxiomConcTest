// src/components/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: 'user',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.username || !form.password || !form.role) {
            alert('All fields are required!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existing = users.find((user) => user.username === form.username);

        if (existing) {
            alert('Username already exists!');
            return;
        }

        users.push(form);
        localStorage.setItem('users', JSON.stringify(users));

        alert(`Sign-up successful as ${form.role}! You can now login.`);
        navigate('/');
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <label>Select Role: </label>
                <select name="role" value={form.role} onChange={handleChange}>
                    <option value="admin">Admin</option>
                    <option value="vendor">Vendor</option>
                    <option value="user">User</option>
                </select>
                <br />
                <button type="submit">Sign Up</button>
            </form>
            <br />
            <p>Already have an account? <a href="/">Login here</a></p>
        </div>
    );
};

export default SignUp;
