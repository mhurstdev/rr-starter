import type * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...restProps }: ButtonProps) {
	return <button {...restProps}>{children}</button>;
}
