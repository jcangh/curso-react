import React, { Component } from 'react'
import Banner from './banner/Banner'
import Mouse from './mouse-evt/Mouse'
import Input from './input-evt/Input'
import NativoSin from './nativo-sin-evt/NativoSin'
import PersistenciaEventos from './persistencia-eventos/PersistenciaEventos'
import EventoCustom from './evento-custom/EventoCustom'

class App extends Component {

    render() {
        return (
            <div>
                <Banner></Banner>
                <Mouse></Mouse>
                <Input></Input>
                <NativoSin></NativoSin>
                <PersistenciaEventos></PersistenciaEventos>
                <EventoCustom></EventoCustom>
            </div>
        )
    }
}

export default App