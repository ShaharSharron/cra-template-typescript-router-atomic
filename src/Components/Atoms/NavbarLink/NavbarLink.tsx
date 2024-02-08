import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type NavbarLinkProps = {
	text: string;
	dest: string;
};

const NavbarLink: FC<NavbarLinkProps> = ({ text, dest }) => {
	return <Link to={dest}>{text}</Link>;
};

export default NavbarLink;
