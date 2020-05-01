'use strict';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.nav`
	${({ theme }) => theme.animation.defaults}
	background: #fff;
	box-shadow: 0 0 ${rem(10)} ${({ theme }) => theme.palette.primary.bodyText};
	height: 100vh;
	position: absolute;
	left: -100vw;
	top: 0;
	width: 75%;
	z-index: 3;
	
	@keyframes slide-in-from-left {
		0% { left: -100vw; }
		100% { left: 0; }	
	}
	
	@keyframes slide-out-to-left {
		0% { left: 0; }
		100% { left: -100vw; }	
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			background: transparent;
			box-shadow: none;
			height: auto;
			left: auto;
			position: static;
			top: auto;
			width: 100%;
			`
		)};

	${(props) =>
		!props.isVisible &&
		props.toggleClicked &&
		css`
			animation-name: slide-out-to-left;
		`};

	${(props) =>
		props.isVisible &&
		props.toggleClicked &&
		css`
			animation-name: slide-in-from-left;
		`};

}`;

const Overlay = styled.div`
	${({ theme }) => theme.animation.defaults}
	background: rgba(0, 0, 0, 0.25);
	height: 100vh;
	left: 0;
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: 1;
`;

const List = styled.ul`
	list-style: none;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: flex;
			justify-content: flex-end;
			`
		)};
`;

const Item = styled.li`
	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			&:not(:last-of-type) {
				margin-right: ${rem(20)};
			}
			`
		)};
`;

const ItemLink = styled.a`
	border-bottom: 1px solid #ddd;
	color: ${({ theme }) => theme.palette.primary.bodyText};
	display: block;
	font-weight: 500;
	padding: ${rem(20)};
	text-decoration: none;
	text-transform: uppercase;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			border: 0;
			font-size: ${rem(14)};
			padding: ${rem(30)} ${rem(20)};
			`
		)};

	${(props) =>
		props.isCurrentPage &&
		css`
			${({ theme }) =>
				theme.media(
					'tablet-l',
					`
				border-bottom: ${rem(1)} solid ${theme.palette.primary.b};
				`
				)};
		`};
`;

export { Wrapper, Overlay, List, Item, ItemLink };
