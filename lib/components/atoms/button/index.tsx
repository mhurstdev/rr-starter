import { clsx } from 'clsx';
import styles from './index.module.css';
import type * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...restProps }: ButtonProps) {
	return (
		<button className={clsx(styles.base, className)} {...restProps}>
			{children}
		</button>
	);
}
