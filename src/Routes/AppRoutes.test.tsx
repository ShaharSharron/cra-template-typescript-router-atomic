import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RoutesAppRoutes from './AppRoutes';

describe('<RoutesAppRoutes />', () => {
	test('it should mount', () => {
		render(<RoutesAppRoutes />);

		const routesAppRoutes = screen.getByTestId('RoutesAppRoutes');

		expect(routesAppRoutes).toBeInTheDocument();
	});
});
