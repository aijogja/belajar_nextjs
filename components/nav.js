import React from 'react'
import Link from 'next/link'


// Ini adalah fungsi, nah untuk memparse props, masukkan sebagai parameter
// Berbeda ketika dia menggunakan class yg extend dari react component,
// dia langsung bisa diambil menggunakan this.props
export const Navbar = (props) => (
  <nav>
    <div className="container nav-wrapper">
      <a href="/" className="brand-logo">Warungku</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link href="produk"><a>Produk</a></Link></li>
        <li><Link href="keranjang"><a>Keranjang ({props.totalcart})</a></Link></li>
      </ul>
    </div>
  </nav>
)

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col s3">
        <ul className="collection with-header">
          <li className="collection-header"><h4>Kategori</h4></li>
          <li className="collection-item"><Link href="#!"><a>Elektronik</a></Link></li>
        </ul>
      </div>
    )
  }
}

class Sidenav extends React.Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.init(elem);
    instance.open()
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <a href="#user"><i className="large material-icons">person</i></a>
              <a href="#name"><span className="black-text name">John Doe</span></a>
              <a href="#email"><span className="black-text email">jdandturk@gmail.com</span></a>
            </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}


export {
  Sidebar,
  Sidenav,
  Footer
}