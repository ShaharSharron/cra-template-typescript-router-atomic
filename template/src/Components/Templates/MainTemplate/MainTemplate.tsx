import React, { PropsWithChildren, Suspense } from 'react';
import { NavigationLink } from '../../../types/navigations';
import Navbar from '../../Molecules/Navbar';

type Props = PropsWithChildren<{
	links: Array<NavigationLink>;
}>;

const MainTemplate: React.FC<Props> = ({ links, children }) => {
	return (
		<>
			<Navbar links={links} />
			<Suspense>{children}</Suspense>
		</>
	);
};

export default MainTemplate;
