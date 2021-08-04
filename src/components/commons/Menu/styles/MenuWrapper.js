import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../../../theme/Utils/breakpointsMedia' 
import { TestStyleVariantsMap } from '../../../foundation/Text/index' 

export const MenuWrapper = styled.nav`
	font-family: 'Rubik', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 1.8rem;
	padding-left: 28rem;
	padding-right: 2.8rem;

	${breakpointsMedia({
		md: css`
			margin-top: 3.2rem;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
			padding: 0 1.6rem;
			max-width: 76.8rem;
		`,
		lg: css`
			max-width: 116rem;
		`,
		xl: css`
			max-width: 122.2rem;
		`
	})}
`

MenuWrapper.LeftSide = styled.div`
	padding: 0;
	margin: 0;
	order: 1;

	${breakpointsMedia({
		md: css`
			width: 13.1rem;
			height: 3.2rem;
			order: initial;
			padding-right: 1.6rem;
		`
	})}
`

MenuWrapper.CentralSide = styled.div`
	margin: 0;
	margin: 0;
	order: 3;
	width: 100%;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.7rem;
	border-top: 0.1rem solid #88989e;
	border-bottom: 0.1rem solid #88989e;
	padding: 1.2;

	${breakpointsMedia({
		md: css`
			max-width: 33.2px;
			flex: 1;
			order: initial;
			border: none;
			padding-top: 0;
			padding-bottom: 0;
		`
	})}
	a {
		text-align: center;
		display: block;
		text-decoration: none;
		color: #88989e;
		transition: 200ms ease-in-out;
		${breakpointsMedia({
			xs: css`
				${TestStyleVariantsMap.smallestException}
			`,
			md: css`
				${TestStyleVariantsMap.paragraph1}
			`
		})}
		&:hover,
    &:focus {
			font-weight: 500;
			color: #070c0e;
		}
	}

`

MenuWrapper.RightSide = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex: 1;
	order: 2;
	justify-content: flex-end;

	${breakpointsMedia({
		md: css`
			order: initial;
		`
	})}

	#busca {
		width: 28.8rem;
		height: 4.4rem;
		border: 0.1px solid ${({ theme }) => theme.colors.tertiary.light.color};
		border-radius: 1.2rem;
		background-image: url(/images/search.svg);
		background-size: contain;
		background-repeat: no-repeat;
		text-indent: 4rem;
	}

	#busca:focus {
		background-image: none;
		text-indent: 0rem;
	}
	
`
