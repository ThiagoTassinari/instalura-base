import styled, { css } from "styled-components";
import get from "lodash/get";
import { TestStyleVariantsMap } from "../../foundation/Text";

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



    ${TestStyleVariantsMap.smallestException}

    ${({ghost}) => (ghost ? ButtonGhost : ButtonDefault)}; // Utilizando operador ternário
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
        xs: css`
            /* All devices */
        `,
        md: css `
            /* From md breakpoint */
        `,
                lg: css `
            /* From lg breakpoint */
        `,
    })}

    ${function(props) {
        console.log('Button', props.theme.breakpoints);

        return `
            @media screen and (min-width: ${props.theme.breakpoints.xs}px) {
                background: red !important;
            }

            @media screen and (min-width: ${props.theme.breakpoints.sm}px) {
                background: red !important;
            }
        `
    }}
`;

/* ------------------------------- Utilizando condicional if---------------------------------

    ${function(props) {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }} 
---------------------------------------------------------------------------------------------*/

