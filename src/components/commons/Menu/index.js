import React from "react";
import { Logo } from "../../../theme/Logo";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";
import Text  from "../../foundation/Text"

export default function Menu() {
    
const links = [
    {
        texto: 'Home',
        url: '/',
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq',
    },
    {
        texto: 'Sobre',
        url: '/sobre',
    }
]
return (
    <MenuWrapper>
    <MenuWrapper.LeftSide>
        <Logo />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
        {links.map((link) => {
            return (
                <li key={link.url}> {/* O react está identificando e organizando por meio dessa key todas instâncias dessa lista */}
                    <Text variant="smallestException" tag="a" href={link.url}>
                        {link.texto}
                    </Text>
                </li>
            )
        })}
    </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main"> {/* O ghost é uma props que chamei dessa forma, onde utilizarei para fazer o styled component do meu botão*/}
            Entrar
        </Button>
        <Button variant="primary.main">
            Cadastrar
        </Button>
    </MenuWrapper.RightSide>
    </MenuWrapper>
    )
}