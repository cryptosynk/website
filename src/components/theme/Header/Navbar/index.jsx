import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import logo from "../../../../images/logo.png"

console.log(logo)
const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<img src={logo} alt="cryptosynk" />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
