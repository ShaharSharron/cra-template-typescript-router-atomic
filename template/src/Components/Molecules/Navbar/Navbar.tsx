import React, { FC } from 'react';

import NavbarLink from '../../Atoms/NavbarLink';

import './Navbar.scss';
import { NavigationLink } from '../../../types/navigations';

type NavbarProps = {
	links: Array<NavigationLink>;
};

const Navbar: FC<NavbarProps> = ({ links }) => {
	return (
		<nav className="Navbar" data-testid="Navbar">
			{links.map((link) => (
				<NavbarLink text={link.text} dest={link.url} />
			))}
		</nav>
	);
};

export default Navbar;
