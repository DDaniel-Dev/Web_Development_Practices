import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
        <div>
          {props.children}
        </div>
      <Footer />
    </Fragment>
  )
};