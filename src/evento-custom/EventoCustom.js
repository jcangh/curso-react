import React, { Component } from 'react'
import './global.css'

//enviar informacion o funcionalidad de componente
//hijo a componente padre

class Hijo extends Component{
    
    manejadorClick = () =>{
        this.props.onSaluda(8709087)
    }
    
    render(){
        return (
            <div className='box blue'>
                <h2>Hijo</h2>
                <button
                    onClick={this.manejadorClick}
                >Saluda</button>
            </div>
        )
    }
}
class EventoCustom extends Component{

    state = {
        name: ''
    }

    manejador = (data) =>{
        this.setState({name: data})
    }

    render(){
        return (
            <div className='box red'>
                <Hijo
                    onSaluda={this.manejador}
                ></Hijo>
                <h1>
                    Nombre : {this.state.name}
                </h1>
            </div>
        )
    }

}

export default EventoCustom