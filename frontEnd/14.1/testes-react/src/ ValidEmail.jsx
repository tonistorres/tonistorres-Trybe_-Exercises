// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

// função que faz a validação de email 
const verifyEmail = (email) => {
    if (email !== "") {
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        return emailRegex.test(email);
    }
    return email='valor nulo';
};

const ValidEmail = (props) => {
    const { email, chave, funcaoRemove } = props;

    return (
        <div className="container-itens-dentro-lista">
            <div className="container-organiza-email-button">
            <span key={chave} data-testid="id-email-user">{` ${ email.toLowerCase()}`}</span>
            <span>
                <input
                    type="button"
                    value="Excluir"
                    onClick={() => funcaoRemove(chave)}
                />
            </span>
            </div>
            <span>
                {
                (verifyEmail(email)
                  ? <span style={{color:'#66D3F3' }}> 
                    Email Valido
                    </span> 
                  : <span style={{color:'red'}}> 
                    Email Inválido
                    </span> 
                )
                } 
            </span>
        </div>
    );
};

ValidEmail.propTypes = {
  email: PropTypes.string,
  chave: PropTypes.number,
}.isRequired

export default ValidEmail;

