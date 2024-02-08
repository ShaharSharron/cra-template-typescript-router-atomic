// withLoading.tsx
import React, { useState, ComponentType } from 'react';

type WithLoadingProps = {
	isLoading: boolean;
};

const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
	const WithLoadingComponent: React.FC<P & WithLoadingProps> = ({
		isLoading,
		...props
	}) => {
		return isLoading ? (
			<div>loading...</div>
		) : (
			<WrappedComponent {...(props as P)} />
		);
	};

	return WithLoadingComponent;
};

export default withLoading;
