import React, { lazy, FC } from 'react';
import './AppRoutes.scss';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Components/Pages/Home'));

type AppRoutesProps = {};

const RoutesAppRoutes: FC<AppRoutesProps> = () => (
	<>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</>
);

export default RoutesAppRoutes;
