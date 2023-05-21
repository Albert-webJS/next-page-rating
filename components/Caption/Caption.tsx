import React from 'react';
import { ReactNode } from 'react';
import styles from "./Caption.module.css";

type CaptionType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface CaptionProps {
	tag: CaptionType;
	children: ReactNode
}

export const Caption = ({ tag, children }: CaptionProps) => {
	const className = styles[tag] || null;

	return React.createElement(tag, { className }, children);
};