import React from 'react'
import Layout from '../components/layout'
import {Sidenav} from '../components/nav'

class Produk extends React.Component {

    render() {
        return(
            <div>
                <Layout>
                    <Sidenav />
                    <div className="col s9">DIsini diisi list produk</div>
                </Layout>
            </div>
        )
    }
}
export default Produk