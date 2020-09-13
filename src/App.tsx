import React, { useState } from 'react';
import Form from './components/Form';
import PageContainer from './components/PageContainer';
import VideoPlayer from './components/VideoPlayer';

import './global.css';
import AppContext from './context/AppContext';
import api from './services/api';

function App() {
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState('');

    async function registerAction(actionName: string) {
        try {
            await api.post('/actions', { email, actionName }).catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{ isValid, setIsValid, email, setEmail, registerAction }}>
            <PageContainer>{!isValid ? <Form /> : <VideoPlayer />}</PageContainer>
        </AppContext.Provider>
    );
}

export default App;
