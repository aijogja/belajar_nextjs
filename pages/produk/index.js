import React from 'react'
import Layout from '../../components/layout'
import { Sidenav } from '../../components/nav'
import axios from 'axios'

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

	render() {
		const { products } = this.state
		return (
			<Layout>
				<div className="col s12">
					{
						products.map((product) => {
							return (
								<div className="col s12 m6 l4" key={product.id}>
									<div className="card">
										<div className="card-image">
											<img src="static/img/no-image.jpg" />
											<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add_shopping_cart</i></a>
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