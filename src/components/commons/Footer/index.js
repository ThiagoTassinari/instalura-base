import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    padding: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem; 
    padding-right: 2.8rem;
    padding-left: 2.8rem;
    img {
        width: 5.8rem;
        margin-right: 2.3rem;
    }
    a {
        color: ${({ theme }) => theme.colors.primary.main.color};
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
        opacity: .5;
        }
    }
`;

export default function Footer(props) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FooterWrapper {...props}>
            <a href="https://www.alura.com.br/">
                <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado durante
                {' '}
                o
                {' '}
                <a href="https://www.alura.com.br/">
                <span>Bootcamp Alura JAM Stack</span>
                </a>
            </p>
        </FooterWrapper>
    );
} 