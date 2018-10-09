import React from 'react'
import {Navbar, Footer} from './nav'

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Layout