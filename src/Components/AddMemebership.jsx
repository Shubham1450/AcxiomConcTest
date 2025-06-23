// src/components/AddMembership.jsx
import React, { useState } from 'react';
import { getSession } from '../utils/auth';

const AddMembership = () => {
    const session = getSession();
    if (!session || session.role !== 'admin') return <h3>Access Denied</h3>;

    const [form, setForm] = useState({
        name: '',
        email: '',
        duration: '6',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.duration) {
            alert('All fields are mandatory');
            return;
        }

        const id = 'M' + Date.now();
        const newMember = { ...form, id };

        localStorage.setItem(`membership_${id}`, JSON.stringify(newMember));
        alert('Membership added successfully!');
        setForm({ name: '', email: '', duration: '6' });
    };

    return (
        <div>
            <h2>Add Membership</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                <br />
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <br />
                <label>Duration:</label>
                <br />
                <label>
                    <input type="radio" name="duration" value="6" checked={form.duration === '6'} onChange={handleChange} />
                    6 Months
                </label>
                <br />
                <label>
                    <input type="radio" name="duration" value="12" checked={form.duration === '12'} onChange={handleChange} />
                    1 Year
                </label>
                <br />
                <label>
                    <input type="radio" name="duration" value="24" checked={form.duration === '24'} onChange={handleChange} />
                    2 Years
                </label>
                <br />
                <button type="submit">Add Membership</button>
            </form>
        </div>
    );
};

export default AddMembership;
