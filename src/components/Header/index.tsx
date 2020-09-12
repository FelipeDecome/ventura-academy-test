import React from 'react';

import Logo from '../Logo';

import './styles.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <Logo />
        </header>
    );
};

export default Header;
