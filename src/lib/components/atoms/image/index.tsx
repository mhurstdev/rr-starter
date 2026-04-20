import type * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Image({ alt, ...restProps }: ImageProps) {
	return <img alt={alt} {...restProps} />;
}
