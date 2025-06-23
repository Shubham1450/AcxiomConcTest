import React from 'react';

const dummyTransactions = [
    {
        id: 1,
        date: '2025-06-20',
        item: 'Wedding Catering Package',
        amount: 25000,
        status: 'Paid'
    },
    {
        id: 2,
        date: '2025-06-22',
        item: 'Floral Decoration Set',
        amount: 8000,
        status: 'Pending'
    },
    {
        id: 3,
        date: '2025-06-23',
        item: 'DJ and Lighting Combo',
        amount: 12000,
        status: 'Paid'
    }
];

const Transaction = () => {
    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>Transaction History</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Item</th>
                        <th style={thStyle}>Amount (₹)</th>
                        <th style={thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyTransactions.map(txn => (
                        <tr key={txn.id}>
                            <td style={tdStyle}>{txn.date}</td>
                            <td style={tdStyle}>{txn.item}</td>
                            <td style={tdStyle}>{txn.amount}</td>
                            <td style={tdStyle}>{txn.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const containerStyle = {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh'
};

const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff'
};

const thStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#6CA0DC',
    color: '#fff',
    fontWeight: 'bold'
};

const tdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center'
};

export default Transaction;
