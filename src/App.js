import React, { Component } from 'react'
import Banner from './banner/Banner'
import Mouse from './mouse-evt/Mouse'
import Input from './input-evt/Input'


class App extends Component {


  render () {
    return (
        <div>
            <Banner></Banner>
            <Mouse></Mouse>
            <Input></Input>
        </div>
    )
  }
}

export default App