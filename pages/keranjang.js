import React from 'react'
import Layout from '../components/layout'
import { Sidebar } from '../components/nav'
import axios from 'axios'
const token = '8e4c7d388ce7d0666c7b72668762bd08dced626c'


class Keranjang extends React.Component {

  constructor(props) {
		super(props)
		// set the default state for products
		this.state = {
			listBarang: [],
		}
	}

	componentDidMount = async () => {
    await this.props.getCart()
    await this.getCart()
  }

  tambahQty = async (cart) => {
    const orderBarang = await axios.post(
      `http://localhost:8000/api/order/${this.props.idOrder}/barang/`,
      {
        "produk": cart.produk.id,
        "qty": 1
      },
      { headers : {"Authorization": "Token " + token}}
    )
    await this.props.getCart()
  }

  kurangQty = async (cart) => {
    const orderBarang = await axios.post(
      `http://localhost:8000/api/order/${this.props.idOrder}/barang/`,
      {
        "produk": cart.produk.id,
        "qty": -1
      },
      { headers : {"Authorization": "Token " + token}}
    )
    await this.props.getCart()
  }

  hapusBarang = async (id) => {
    await axios.delete(
      `http://localhost:8000/api/order/${this.props.idOrder}/barang/${id}`,
      { headers : {"Authorization": "Token " + token}}
    )
    await this.props.getCart()
    await this.getCart()
  }

  getCart = async () => {
    const listBarang = await axios.get(
      `http://localhost:8000/api/order/${this.props.idOrder}/barang/`,
      { headers : {"Authorization": "Token " + token}}
    )
    this.setState({listBarang: listBarang.data})
  }

  updateQty = (id) => {
    console.log(id)
  }

	render() {
    const { listBarang } = this.state
		return (
			<Layout {...this.props}>
        <div className="col s12 l8">
          {
            listBarang.map((cart) => {
              return (
                <div className="card horizontal" key={cart.id}>
                  <div className="card-image">
                    <img src="static/img/no-image.jpg" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span className="card-title">{cart.produk.nama}</span>
                      <div>{parseInt(cart.harga)}</div>
                    </div>
                    <div className="card-action">
                      <div className="row">
                        <div className="col s2 l2 center-align">
                        <a className="btn-floating waves-effect waves-light blue lighten-3" onClick={() => this.kurangQty(cart)}><i className="material-icons">remove</i></a>
                        </div>
                        <div className="col s2 l2 center-align">
                          <input className="center-align" type="text" value={cart.qty} onChange={() => this.updateQty(cart.id)} />
                        </div>
                        <div className="col s2 l2 center-align">
                          <a className="btn-floating waves-effect waves-light blue lighten-3" onClick={() => this.tambahQty(cart)}><i className="material-icons">add</i></a>
                        </div>
                        <div className="col s6 l6 right-align">
                        <a className="btn-floating waves-effect waves-light red" onClick={() => this.hapusBarang(cart.id)}><i className="material-icons">delete</i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
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