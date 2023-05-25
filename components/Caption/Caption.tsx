import React, { createElement, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Caption.module.css';

type CaptionType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface CaptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: CaptionType;
	children: ReactNode
}

export const Caption = ({ tag, children, ...props }: CaptionProps): JSX.Element => {
	const className = styles[tag] ?? null;
	return (
		<>
			{createElement(tag, { className, ...props }, children)}
		</>
	);
};