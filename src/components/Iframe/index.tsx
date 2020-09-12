import React from 'react';

import './styles.css';

const Iframe = () => {
    return (
        <>
            <iframe
                title="Titulo do Iframe"
                src="https://www.youtube.com/embed/LJePn9kCH84"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </>
    );
};

export default Iframe;
