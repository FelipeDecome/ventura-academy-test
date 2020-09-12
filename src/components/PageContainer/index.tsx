import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import './styles.css';

const PageContainer: React.FC = (children) => {
    return (
        <>
            <Header />
            <div className="page-container">
                <div className="content-wrapper">{children?.children}</div>
            </div>
            <Footer />
        </>
    );
};

export default PageContainer;
