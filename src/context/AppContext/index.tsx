import React, { Dispatch, SetStateAction } from 'react';

interface Context {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    isValid: boolean;
    setIsValid: Dispatch<SetStateAction<boolean>>;
}

const AppContext = React.createContext<Context>({
    email: '',
    setEmail: () => null,
    isValid: false,
    setIsValid: () => null,
});

export default AppContext;
