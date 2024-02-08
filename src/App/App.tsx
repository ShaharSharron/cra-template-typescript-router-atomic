import React, { lazy, Suspense } from 'react';
import './App.scss';
import Navbar from '../Components/Molecules/Navbar';
import AppRoutes from '../Routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainTemplate from '../Components/Templates/MainTemplate/MainTemplate';

const queryClient = new QueryClient();

const links = [
	{
		text: 'Home',
		url: '/',
	},
	{
		text: 'Player Game Stats',
		url: '/stats',
	},
];
function App() {
	return (
		<MainTemplate links={links}>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</MainTemplate>
	);
}

export default App;
