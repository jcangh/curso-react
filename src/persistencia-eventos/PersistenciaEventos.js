import React, { Component } from 'react'

class PersistenciaEventos extends Component{


    state = {
        color: 'blue'
    }

    handlerChange = (event) =>{
        //no es la mas optima
        //event.persist()

        const color = event.target.value
        
        console.log(event.target.value)
        this.setState(state =>({
            color: color
        }))
    }

    render(){
        return (
            <div>
                <input type="text"
                onChange={this.handlerChange}
                />
                <h1
                    style={{
                        color: this.state.color
                    }}
                >
                    {this.state.color}
                </h1>
            </div>
        )
    }
}

export default PersistenciaEventos