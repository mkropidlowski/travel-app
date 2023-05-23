import Button from 'components/atoms/Button/Button';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface AuthButtonProps {
	icon: IconType;
	onClick: () => void;
}

const AuthButton: FC<AuthButtonProps> = ({ icon: Icon, onClick }) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			className="w-[120px] inline-flex justify-center rounded-md px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300  bg-white"
		>
			<Icon />
		</button>
	);
};

export default AuthButton;

