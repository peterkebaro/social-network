import React, { Component } from 'react'
import './navbar.scss'

interface NavbarProps {
	className: string
	children: React.ReactElement[]
}

export class Navbar extends Component<NavbarProps> {
	render() {
		const { className, children } = this.props

		return (
			<nav className={ `navbar ${ className || '' }`}>
				{ children }
			</nav>
		)
	}
}