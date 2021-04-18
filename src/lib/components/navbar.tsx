import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faYenSign } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'

interface NavbarProps {
	className: string
	children: React.ReactElement[]
}

interface NavbarState {
	screenWidth: number
	showBurgerMenu: boolean
}
export class Navbar extends Component<NavbarProps, NavbarState> {
	constructor( props: NavbarProps ) {
		super( props )
		this.state = {
			screenWidth: 200000,
			showBurgerMenu: false
		}
	}

	componentDidMount() {
		this.setState({
			screenWidth: window.innerWidth
		})
		window.onresize = ()=>{
			this.setState({
				screenWidth: window.innerWidth
			})
		}
	}

	burgerClick() {

		this.setState({

			showBurgerMenu: !this.state.showBurgerMenu

		})
		
	}

	menuClicked() {

		this.setState({

			showBurgerMenu: false

		})

	}

	render() {
		const { className, children } = this.props
		const { screenWidth, showBurgerMenu } = this.state

		return (
			<div>
				{ ( screenWidth ) > 400
					
					? <nav className={ `navbar ${ className || '' }`}>
							{ children }
						</nav>
					
					: <nav className={ `navbar mobile ${ !showBurgerMenu && 'hide-menu-items'} ${ className || '' }`}>
							<FontAwesomeIcon onClick = { () => this.burgerClick() } icon={faBars} />
							<div onClick={ ()=>this.menuClicked() }>
								{ children }
							</div>
						</nav>

				}
			</div>
		)
	}
}