import React, { useState } from 'react';
import Form from './components/Form';
import PageContainer from './components/PageContainer';
import Iframe from './components/Iframe';

import './global.css';
import AppContext from './context/AppContext';

function App() {
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <AppContext.Provider value={{ isValid, setIsValid, email, setEmail }}>
            <PageContainer>{!isValid ? <Form /> : <Iframe />}</PageContainer>
        </AppContext.Provider>
    );
}

export default App;
