'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Overlay = styled.div`
	background: ${({ theme }) => theme.palette.primary.black};
	height: 100vh;
	left: 0;
	opacity: 0.75;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: ${({ theme }) => theme.zIndex.indexOf('modal-overlay')};
`;

const Wrap = styled.div`
	background: ${({ theme }) => theme.palette.primary.white};
	border-radius: ${rem(10)};
	height: 90vh;
	left: 50%;
	padding: ${rem(20)};
	position: fixed;
	top: 50%;
	transform: translateY(-50%) translateX(-50%);
	width: 90vw;
	z-index: ${({ theme }) => theme.zIndex.indexOf('modal-wrap')};

	${({ theme }) =>
		theme.media(
			'tablet-p',
			`
            height: auto;
            padding: ${rem(40)};
            top: 10%;
            transform: translateY(0) translateX(-50%);
			width: 75%;
			`
		)};
`;

const CloseButton = styled.button`
	background: 0;
	border: 0;
	padding: 0;
	position: absolute;
	right: ${rem(20)};
	top: ${rem(20)};
	z-index: ${({ theme }) => theme.zIndex.indexOf('modal-close')};
`;

export { Overlay, Wrap, CloseButton };
