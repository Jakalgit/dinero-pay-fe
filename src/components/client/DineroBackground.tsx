"use client";

import React, {useEffect, useRef, useState} from 'react';
import styles from "@/styles/components/DineroBackground.module.css";
import DiamondIcon from "@/components/icons/DiamondIcon";

const DineroBackground = () => {

	const containerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const [dimensions, setDimensions] = useState({ rows: 0, columns: 0 });
	const [highlightedIndex, setHighlightedIndex] = useState<{ row: number, col: number } | null>(null);

	const highlightedTimeout = 300;

	const [cssVars, setCssVars] = useState({
		iconSize: 0,
		iconGap: 0,
		rowGap: 0,
	});

	const updateVars = () => {
		if (wrapperRef.current) {
			const computed = getComputedStyle(wrapperRef.current);
			const get = (name: string) =>
				parseFloat(computed.getPropertyValue(name).trim());

			setCssVars({
				iconSize: get("--icon-size"),
				iconGap: get("--icon-gap"),
				rowGap: get("--row-gap"),
			});
		}
	}

	useEffect(() => {
		updateVars();

		window.addEventListener("resize", updateVars);
		return () => window.removeEventListener("resize", updateVars);
	}, []);

	useEffect(() => {
		if (!containerRef.current || !wrapperRef.current || cssVars.iconSize === 0) return;
		const width = containerRef.current.clientWidth;
		const height = containerRef.current.clientHeight;

		// В одной строке у нас K иконок и K - 1 отступов между ними, считаем columns с учётом этого
		// Кол-во иконок в большей строке
		const columns = Math.floor((width - cssVars.iconSize) / (cssVars.iconSize + cssVars.iconGap)) + 1;

		// Кол-во строке считаем так же, N строк и N - 1 отступов между ними
		// Кол-во строк
		const rows = Math.floor((height - cssVars.iconSize) / (cssVars.iconSize + cssVars.rowGap)) + 1;

		setDimensions({ rows, columns });
	}, [cssVars]);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomRow = Math.floor(Math.random() * dimensions.rows);
			const randomCol = Math.floor(Math.random() * dimensions.columns);

			setHighlightedIndex({row: randomRow, col: randomCol});

			const timeout = setTimeout(() => {
				setHighlightedIndex(null);
			}, highlightedTimeout);

			return () => clearTimeout(timeout);
		}, highlightedTimeout + 200);

		return () => clearInterval(interval);
	}, [dimensions]);

	return (
		<div
			className={`w-full h-full absolute bg-[color:var(--dark-color-1)] ${styles.registrationBackground}`}
			ref={wrapperRef}
		>
			<div
				className={`w-full h-full flex flex-col justify-center ${styles.container}`}
				ref={containerRef}
			>
				{new Array(dimensions.rows).fill(0).map((_, i) =>
					<div
						key={i}
						className={`flex items-center justify-center ${styles.row}`}
					>
						{new Array(dimensions.columns - (i % 2)).fill(0).map((_, index) =>
							<DiamondIcon
								key={index}
								className={`${styles.diamondIcon} ${highlightedIndex?.row === i && highlightedIndex?.col === index && styles.highlighted} duration-300`}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default DineroBackground;