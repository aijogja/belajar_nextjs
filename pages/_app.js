import React from 'react'
import App, { Container } from 'next/app'
import axios from 'axios'
const token = '8e4c7d388ce7d0666c7b72668762bd08dced626c'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(props) {
		super(props)
		// set the default state for products
		this.state = {
      totalCart: 0,
      idOrder:'',
    }
    // set prop totalcart
    this.totalcart = 10
  }

  
  ganticart = (isi) => {
    /*
    Ini adalah fungsi (struktur dari ES6)
    props dalam bentuk fungsi ini tidak bisa langsung di render
    ini fungsi nanti yang akan dipanggil di `addcart`
    */
    this.setState({totalCart:isi})
  }

  hitungTotalCart = (cart) => {
    /*
    Fungsi untuk menghitung total qty yang ada di cart
    */
    let qty = 0
    cart.map((item) => {
      qty += item.qty
    })
    return qty
  }

  getCart = async () => {
		/*
		Fungsi ini digunakan untuk menampilkan cart
		(cart yaitu orderan dengan status cart)
		*/
    const existOrder = await axios.get(
      'http://localhost:8000/api/order/?status=cart',
      { headers : {"Authorization": "Token " + token}}
    )
    if(existOrder.data.length > 0){
      const order = existOrder.data[existOrder.data.length - 1]
      const listBarang = await axios.get(
        `http://localhost:8000/api/order/${order.id}/barang/`,
        { headers : {"Authorization": "Token " + token}}
      )
      const totalCart = this.hitungTotalCart(listBarang.data)
      this.setState({
        idOrder: order.id,
        totalCart
      })
    }
  }

  componentDidMount = async () => {
    await this.getCart()
  }

  render () {
    const { Component, pageProps } = this.props
    // Untuk ngirim props ke componen berikutnya menggunakan {...propsnya}
    return (
      <Container>
        <Component
        {...pageProps}
        totalcart={this.state.totalCart}
        ganticart={this.ganticart}
        idOrder={this.state.idOrder}
        getCart={this.getCart}
        />
      </Container>
    )
  }
}