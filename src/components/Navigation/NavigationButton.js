import { ellipsis, lighten } from 'polished';
import React, { createElement } from 'react';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const IconWrapper = styled.span`
	max-width: 40px;
	max-height: 40px;

	img {
		width: 40px;
		height: 40px;
		border-radius: 3px;
		object-fit: cover;
	}
`;

const TextWrapper = styled.span`
	${ellipsis()}

	:not(:first-child) {
		margin-left: 12px;
	}
`;

const loading = css`
	pointer-events: none;
	
	* {
		display: none;
	}

	:before {
		filter: none !important;
		opacity: ${({ bright }) => bright ? 0.6 : 0.3} !important;
		transform: scale(${({ bright }) => bright ? 0.65 : 0.5});
	}
`;

const NavigationButton = styled(({ accent, children, icon, large, round, width, ...props }) => createElement(
	props.to ? Link : 'button',
	props,
	icon ? <IconWrapper>{ icon }</IconWrapper> : null,
	typeof children === 'string' ? <TextWrapper>{ children }</TextWrapper> : children
))`
	width: ${({ round }) => round ? '44px' : '100%'};
	height: ${({ large }) => large ? 56 : 44}px;
	color: inherit;
	background-color: transparent;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: ${({ large }) => large ? 500 : 'normal'};
	max-width: 100%;
	padding: ${({ round, large }) => round ? 0 : large ? '8px 4px' : '8px 12px'};
	border: none;
	border-radius: ${({ round }) => round ? '50%' : '3px'};
	display: inline-flex;
	align-items: center;
	justify-content: ${({ children }) => typeof children === 'string' ? 'flex-start' : 'center'};
	position: relative;
	z-index: 1;

	${({ disabled }) => disabled && `pointer-events: none;`}

	${props => props.loading && loading}

	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: currentColor;
		filter: brightness(10%);
		border-radius: inherit;
		z-index: -1;
		opacity: 0;
		transition: all 100ms ease;
		will-change: background-color, filter, opacity;
	}
	
	:hover {
		color: inherit;
		text-decoration: none;
		
		:before {
			opacity: 0.25;
		}
	}
	
	:active {
		:before {
			filter: none;
			opacity: 0.3;
		}
	}

	:focus {
		box-shadow: inset 0px 0px 0px 2px ${({ theme }) => lighten(0.17, theme.primary)};

		:before {
			top: 2px;
			right: 2px;
			bottom: 2px;
			left: 2px;
		}
	}
`;

export default NavigationButton;