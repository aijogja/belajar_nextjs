import React from 'react'
import Layout from '../components/layout'
import { Sidebar } from '../components/nav'
import axios from 'axios'

class Keranjang extends React.Component {

	render() {
		return (
			<Layout {...this.props}>
				<div className="col s12 l8">
          <div className="card horizontal">
          <div className="card-image">
            <img src="static/img/no-image.jpg" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">Xiaomi Redmi 3 </span>
              <div>2000.000</div>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s2 l2 center-align">
                <a className="btn-floating waves-effect waves-light blue lighten-3"><i className="material-icons">remove</i></a>
                </div>
                <div className="col s2 l2 center-align">
                  <input className="center-align" type="text" />
                </div>
                <div className="col s2 l2 center-align">
                  <a className="btn-floating waves-effect waves-light blue lighten-3"><i className="material-icons">add</i></a>
                </div>
                <div className="col s6 l6 right-align">
                <a className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col s12 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Total</span>
              <div>2000.000</div>
            </div>
            <div className="card-action">
            <a className="waves-effect waves-light btn green">Checkout ({this.props.totalcart})</a>
            </div>
          </div>
				</div>
			</Layout>
		)
	}
}
export default Keranjang