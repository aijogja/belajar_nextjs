import React from 'react'
import Layout from '../../components/layout'
import { Sidenav } from '../../components/nav'
import axios from 'axios'
const token = '8e4c7d388ce7d0666c7b72668762bd08dced626c'

class Produk extends React.Component {
	constructor(props) {
		super(props)
		// set the default state for products
		this.state = {
			products: [],
		}
	}

	componentDidMount = async () => {
		// axios is used for call the api (client request)
		const products = await axios.get('http://localhost:8000/api/produk/')
		// this setState is used to set (replace) the default props products
		this.setState({products: products.data})
	}

	addcart = async (id) => {
		/*
		Fungsi ini digunakan untuk menambahkan cart
		(cart yaitu orderan dengan status cart)
		*/
		const order = await this.getorcreateOrder()
		// Ini digunakan untuk menambahkan barang ke order
		const tambahBarang = await axios.post(
			`http://localhost:8000/api/order/${order.id}/barang/`,
			{
				"qty": 1,
				"produk": id
			},
			{ headers : {"Authorization": "Token " + token}}
		)

		const totalcart = this.props.totalcart + 1
		this.props.ganticart(totalcart)
	}

	getorcreateOrder = async () => {
		/*
		Fungsi ini digunakan untuk get existing order
		atau akan bikin baru ketika belum ada order
		*/
		let order
		try {
			// Ini bagian untuk get order dengan status 'cart'
			const existOrder = await axios.get(
				'http://localhost:8000/api/order/?status=cart',
				{ headers : {"Authorization": "Token " + token}}
			)
			if (existOrder.data.length > 0){
				// apabila ada order, maka ambil yang terakhir
				order = existOrder.data[existOrder.data.length - 1]
			} else {
				// Ini bagian untuk create new order
				const newOrder = await axios.post(
					'http://localhost:8000/api/order/',
					{
						"no_hape": "087838364959",
						"catatan": "New Order",
						"ongkir": 0,
						"alamat": "Sleman"
					},
					{ headers : {"Authorization": "Token " + token}}
				)
				order = newOrder.data
			}
			return order
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		const { products } = this.state
		return (
			<Layout {...this.props}>
				<div className="col s12">
					{
						products.map((product) => {
							return (
								<div className="col s12 m6 l4" key={product.id}>
									<div className="card">
										<div className="card-image">
											<img src="static/img/no-image.jpg" />
											<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => this.addcart(product.id)}><i className="material-icons">add_shopping_cart</i></a>
										</div>
										<div className="card-content">
											<span className="card-title">{product.nama}</span>
											<p>{product.harga}</p>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</Layout>
		)
	}
}
export default Produk