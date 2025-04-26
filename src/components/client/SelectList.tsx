import React, {useState} from 'react';
import stylesInput from "@/styles/components/Input.module.css";
import styles from "@/styles/components/SelectList.module.css";
import {AnimatePresence, motion} from "framer-motion";
import KeyboardArrowIcon from "@/components/icons/KeyboardArrowIcon";

interface SelectListProps {
	wrapperAttributes?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
	buttonAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
	selectedValue?: string;
	items?: { id: string | number, name: string }[];
	setValue: (id: string | number) => void;
}

const SelectList: React.FC<SelectListProps> = ({ wrapperAttributes, buttonAttributes, selectedValue, items = [], setValue }) => {
	const wrapperClassName = wrapperAttributes?.className || '';

	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const _setValue = (id: string | number) => {
		setValue(id);
		setIsOpen(false);
	}

	return (
		<div
			{...wrapperAttributes}
			className={`relative ${wrapperClassName}`}
		>
			<button
				{...buttonAttributes}
				onClick={toggleDropdown}
				className={`flex items-center justify-between w-full bg-transparent !border border-[color:var(--blue-color-3)] ${stylesInput.wrapper}`}
			>
				<p className={`geologica text-white ${styles.input}`}>
					{selectedValue}
				</p>
				<KeyboardArrowIcon className={styles.svg} />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className={`absolute overflow-hidden ${styles.list} bg-[color:var(--blue-color-5)] 
						!border border-[color:var(--blue-color-3)] w-full p-0`}
					>
						{items.map((item, index) =>
							<li
								onClick={() => _setValue(item.id)}
								className="flex items-center cursor-pointer geologica bg-transparent
									text-[color:--purple-color-1] hover:backdrop-brightness-200"
								key={index}
							>
								{item.name}
							</li>
						)}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SelectList;