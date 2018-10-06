import React from 'react'

export class Navbar extends React.Component {
    render () {
        return(
            <div>
            Navbar
            </div>
        )
    }
}

export class Footer extends React.Component {
    render () {
        return(
            <div>
            Footer
            </div>
        )
    }
}

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Navbar></Navbar>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}
export default Layout