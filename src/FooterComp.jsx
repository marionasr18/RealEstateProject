import React from 'react';

const Home = () => {
    return (
        <div style={{overflowY: 'auto',flexDirection: 'column',height: '85vh'}} >
            <footer style={footerStyle}>
                <p style={footerTextStyle}>&copy; 2024 Let's Stay Homes. All rights reserved.</p>
            </footer>
        </div>
    );
};

const footerStyle = {
    backgroundColor: '#343a40',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
};

const footerTextStyle = {
    fontSize: '1rem',
};

export default Home;
