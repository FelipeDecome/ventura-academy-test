import React, { ChangeEvent, FormEvent, useContext } from 'react';
import validator from 'validator';
import AppContext from '../../context/AppContext';

import './styles.css';

const Form: React.FC = () => {
    const { email, setEmail, setIsValid } = useContext(AppContext);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        setEmail(value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const isEmailValid = validator.isEmail(email);

        setIsValid(isEmailValid);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <legend>
                Insira um email <span className="underline">válido</span> para poder assistir ao vídeo
            </legend>

            <div className="input-wrapper">
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="input"
                    value={email}
                    required
                    onChange={handleInputChange}
                />
                <label className="label" htmlFor="email">
                    E-mail
                </label>
            </div>

            <button className="button" type="submit">
                Assistir
            </button>
        </form>
    );
};

export default Form;
