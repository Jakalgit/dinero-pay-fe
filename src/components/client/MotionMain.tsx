"use client";

import React, {ComponentProps} from 'react';
import { motion } from "framer-motion";

const MotionMain: React.FC<ComponentProps<typeof motion.main>> = ({ ...rest }) => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			{...rest}
		/>
	);
};

export default MotionMain;