import React from 'react'
import App, { Container } from 'next/app'

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
			totalcart: 20,
    }
    // set prop totalcart
    this.totalcart = 10
  }
  
  // Ini adalah fungsi (struktur dari ES6)
  // props dalam bentuk fungsi ini tidak bisa langsung di render
  // ini fungsi nanti yang akan dipanggil di `addcart`
  ganticart = (isi) => {
    this.setState({totalcart:isi})
  }

  render () {
    const { Component, pageProps } = this.props
    // Untuk ngirim props ke componen berikutnya menggunakan {...propsnya}
    return (
      <Container>
        <Component
        {...pageProps}
        totalcart={this.state.totalcart}
        ganticart={this.ganticart}
        />
      </Container>
    )
  }
}