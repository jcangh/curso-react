import React, { Component } from 'react'
import Banner from './banner/Banner'
import Mouse from './mouse-evt/Mouse'


class App extends Component {


  render () {
    return (
        <div>
            <Banner></Banner>
            <Mouse></Mouse>
        </div>
    )
  }
}

export default App