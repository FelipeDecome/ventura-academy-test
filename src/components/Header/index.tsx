import React from 'react';

import Logo from '../Logo';

import './styles.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <a href="/">
                <Logo />
            </a>
        </header>
    );
};

export default Header;
