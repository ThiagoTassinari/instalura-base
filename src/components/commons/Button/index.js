import styled, { css } from "styled-components";
import get from "lodash/get";

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: white;
    background-color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${function(props) {
        return get(props.theme, `colors.${props.variant}.contrastText`);
    }};
`;

export const Button = styled.button`
    border: 0;
    margin: 0.2rem;
    cursor: pointer;
    padding: 1.2rem 1.6rem;
    font-weight: bold;
    opacity: 1;
    border-radius: 0.8rem;
    ${({ghost}) => (ghost ? ButtonGhost : ButtonDefault)}; // Utilizando operador ternário
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

/* ------------------------------- Utilizando condicional if---------------------------------

    ${function(props) {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }} 
---------------------------------------------------------------------------------------------*/
