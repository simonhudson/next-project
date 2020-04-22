'use strict';

import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
	${({ theme }) => theme.animation.defaults}
    background: #eee;
	height: 100vh;
	position: absolute;
	left: -75%;
	top: 0;
	width: 75%;
	
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

// .main-navigation__link {
//     @include border-b();
//     @include padding();
//     @include semi-strong();
//     @include transition('background');
//     @include uppercase();
//     background: transparent;
//     color: palette(primary, bodyText);
//     display: block;

//     &:hover,
//     &:focus {
//         background: #dfdfdf;
//     }

//     @include media(tablet-l) {
//         border: 0;
//         display: inline-block;
//     }

// }

// const Item = styled.a`
// 	color: red;
// `;

export { Wrapper };
