import React from 'react';

const dummyItems = [
    {
        id: 1,
        name: "Wedding Catering Package",
        description: "Includes 3-course meals for 100 guests",
        price: 25000,
        category: "Catering"
    },
    {
        id: 2,
        name: "Floral Decoration Set",
        description: "Fresh flower arrangements for stage & entrance",
        price: 8000,
        category: "Decoration"
    },
    {
        id: 3,
        name: "DJ and Lighting Combo",
        description: "DJ with dance floor lighting system",
        price: 12000,
        category: "Lighting"
    }
];

const YourItems = () => {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Your Items</h2>
            <div style={itemListStyle}>
                {dummyItems.map(item => (
                    <div key={item.id} style={itemCardStyle}>
                        <h3 style={itemTitle}>{item.name}</h3>
                        <p style={itemDesc}>{item.description}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> ₹{item.price}/-</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const containerStyle = {
    padding: '30px',
    fontFamily: 'Arial',
    background: '#f3f3f3',
    minHeight: '100vh'
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    backgroundColor: '#6CA0DC',
    padding: '10px 20px',
    borderRadius: '8px',
    color: '#fff'
};

const itemListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
};

const itemCardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const itemTitle = {
    margin: '0 0 10px 0',
    color: '#333'
};

const itemDesc = {
    margin: '0 0 10px 0',
    fontStyle: 'italic'
};

export default YourItems;
