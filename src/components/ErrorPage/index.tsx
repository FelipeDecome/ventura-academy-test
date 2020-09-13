import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import './styles.css';

interface ErrorPageProps {
    errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
    const { setError } = useContext(AppContext);

    function handleClick() {
        setError('');
    }

    return (
        <div className="error-page-container">
            <h3 className="error-detail">Houve algum problema com a requisição</h3>

            <p className="error-message">{errorMessage}</p>

            <button type="button" className="button" onClick={handleClick}>
                Tentar Novamente
            </button>
        </div>
    );
};

export default ErrorPage;
