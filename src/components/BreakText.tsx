import React from 'react';

export const BreakText = ({ text }: { text: string }) => {
	const parts = text.split('\n');
	return (
		<>
			{parts.map((part, index) => (
				<React.Fragment key={index}>
					{index > 0 && <br />}
					{part}
				</React.Fragment>
			))}
		</>
	);
};