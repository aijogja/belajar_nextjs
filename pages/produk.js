import React from 'react'
import Layout from '../components/layout'
import {Sidenav} from '../components/nav'

class Produk extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products : [
                { id : 1, name: 'Xiaomi'},
                { id : 2, name: 'Gula'},
                { id : 3, name: 'Sepeda'},
            ]
        }
    }

    render() {
        const {products} = this.state
        // console.log(products)
        return(
            <Layout>
                <Sidenav />
                <div className="col s9">
                    {
                        products.length && products.map((product) => (
                            <div key={product.id}>{product.name}</div>
                        ))
                    }
                </div>
            </Layout>
        )
    }
}
export default Produk