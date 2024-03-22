import React from 'react';

const Home = () => {
    return (
        <div style={{overflowY: 'auto',flexDirection: 'column',height: '85vh'}} >
            <header style={headerStyle}>
                <div className="container">
                    <h1 style={headingStyle}>Let's Stay Homes</h1>
                    <p style={subHeadingStyle}>Your trusted partner in finding your dream home</p>
                </div>
            </header>
            <section style={featuresSectionStyle}>
                <div className="container">
                    <div style={featureStyle}>
                        <img src="/icons/searchIcon.png" alt="Search Icon" style={iconStyle} />
                        <h2 style={featureHeadingStyle}>Find Your Dream Home</h2>
                        <p style={featureTextStyle}>Discover a wide range of properties tailored to your preferences.</p>
                    </div>
                    <div style={featureStyle}>
                        <img src="/finance-icon.png" alt="Finance Icon" style={iconStyle} />
                        <h2 style={featureHeadingStyle}>Get Financing Assistance</h2>
                        <p style={featureTextStyle}>We provide expert advice and support to help you secure financing for your home.</p>
                    </div>
                    <div style={featureStyle}>
                        <img src="/expert-advice-icon.png" alt="Expert Advice Icon" style={iconStyle} />
                        <h2 style={featureHeadingStyle}>Expert Advice</h2>
                        <p style={featureTextStyle}>Our team of experienced professionals is here to guide you through every step of the process.</p>
                    </div>
                </div>
            </section>
            <footer style={footerStyle}>
                <p style={footerTextStyle}>&copy; 2024 Let's Stay Homes. All rights reserved.</p>
            </footer>
        </div>
    );
};

const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: ' 0',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
};

const subHeadingStyle = {
    fontSize: '1.5rem',
    color: '#6c757d',
};

const featuresSectionStyle = {
    backgroundColor: '#e9ecef',
    // padding: '50px 0',
};

const featureStyle = {
    textAlign: 'center',
    marginBottom: '40px',
};

const iconStyle = {
    width: '100px',
    marginBottom: '20px',
};

const featureHeadingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
};

const featureTextStyle = {
    fontSize: '1.2rem',
    color: '#6c757d',
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
