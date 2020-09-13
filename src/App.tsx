import React, { useState } from 'react';
import Form from './components/Form';
import PageContainer from './components/PageContainer';
import VideoPlayer from './components/VideoPlayer';

import './global.css';
import AppContext from './context/AppContext';
import api from './services/api';
import ErrorPage from './components/ErrorPage';

function App() {
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function registerAction(actionName: string) {
        await api.post('/actions', { email, actionName });
    }

    return (
        <AppContext.Provider value={{ isValid, setIsValid, email, setEmail, registerAction, setError }}>
            <PageContainer>
                {error && <ErrorPage errorMessage={error} />}
                {!error && (!isValid ? <Form /> : <VideoPlayer />)}
            </PageContainer>
        </AppContext.Provider>
    );
}

export default App;
