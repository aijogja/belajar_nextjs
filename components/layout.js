import React from 'react'
import { Navbar, Footer, Sidebar } from './nav'

class Layout extends React.Component {

	defaultBody() {
		const { children } = this.props
		if (children) {
			return children
		} else {
			return (
				<div>
					<Sidebar />
					<div className="col s9"><strong>Home</strong></div>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="body_flex">
				<Navbar />
				<div className="main_flex container">
					<div className="row">
						{this.defaultBody()}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default Layout