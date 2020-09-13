import React, { Dispatch, SetStateAction } from 'react';

interface Context {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    isValid: boolean;
    setIsValid: Dispatch<SetStateAction<boolean>>;
    registerAction: (action: string) => void;
    setError: Dispatch<SetStateAction<string>>;
}

const AppContext = React.createContext<Context>({
    email: '',
    setEmail: () => null,
    isValid: false,
    setIsValid: () => null,
    registerAction: () => null,
    setError: () => null,
});

export default AppContext;
