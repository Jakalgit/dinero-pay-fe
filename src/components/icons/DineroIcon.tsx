import React from 'react';

const DineroIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
	return (
		<svg
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<g clipPath="url(#clip0_68_38)">
				<rect width="50" height="50" rx="25" fill="#2196F3"/>
				<path
					d="M20.5245 21.7273H29.4755L25.2398 13.4614H24.7602L20.5245 21.7273ZM23.8012 40.3845V24.089H10.015L23.8012 40.3845ZM26.1988 40.3845L39.985 24.089H26.1988V40.3845ZM32.1129 21.7273H40.3846L37.0679 15.1933C36.7749 14.6685 36.382 14.2487 35.8891 13.9338C35.3963 13.6189 34.8435 13.4614 34.2308 13.4614H27.957L32.1129 21.7273ZM9.61539 21.7273H17.8871L22.043 13.4614H15.7692C15.1565 13.4614 14.6037 13.6189 14.1109 13.9338C13.6181 14.2487 13.2251 14.6685 12.9321 15.1933L9.61539 21.7273Z"
					fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0_68_38">
					<rect width="50" height="50" fill="white"/>
				</clipPath>
			</defs>
		</svg>

	);
};

export default DineroIcon;