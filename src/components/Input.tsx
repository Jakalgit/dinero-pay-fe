import React from 'react';
import styles from "@/styles/components/Input.module.css";

interface InputProps {
	wrapperAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
	inputAttributes?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
}

const Input: React.FC<InputProps> = ({ wrapperAttributes, inputAttributes }) => {

	const wrapperClassName = wrapperAttributes?.className || '';
	const inputClassName = wrapperAttributes?.className || '';

	return (
		<div
			{...wrapperAttributes}
			className={`flex items-center !border border-[color:var(--blue-color-3)] ${styles.wrapper} ${wrapperClassName}`}
		>
			<input
				{...inputAttributes}
				className={`geologica w-full text-white placeholder-[--color:--blue-color-3] 
				 bg-transparent border-none outline-none ${styles.input} ${inputClassName}`
				}
			/>
		</div>
	);
};

export default Input;