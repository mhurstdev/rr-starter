import * as React from 'react';
import { clsx } from 'clsx';
import styles from './index.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...restProps }: ButtonProps) {
	const [hasBeenClicked, setHasBeenClicked] = React.useState(false);

	const handleOnClick = async () => {
		const res = await fetch('https://api.example.com/button-click', {
			method: 'POST',
			body: JSON.stringify({ clicked: true }),
		});
		const data = await res.json();
		if (data.success) setHasBeenClicked(true);
	};

	return (
		<button
			className={clsx(styles.base, className)}
			onClick={handleOnClick}
			{...restProps}
		>
			{hasBeenClicked ? 'Clicked!' : children}
		</button>
	);
}
