import React from 'react'
import Layout from '../components/layout'
import { Sidenav } from '../components/nav'
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
				<Sidenav />
				<div className="col s9">
					{
						products.map((product) => (
							<div key={product.id}>{product.nama}</div>
						))
					}
				</div>
			</Layout>
		)
	}
}
export default Produk