import React from 'react'

class Input extends React.Component{

    state = {
        text: '',
        evento: ''
    }

    manejador = (event) =>{
        this.setState({
            text: event.target.value,
            evento: event.type
        })
    } 

    render(){
        return(
            <div>
                <input 
                
                type="text"
                onChange={this.manejador}
                onCopy={this.manejador}
                onPaste={this.manejador}
                ></input>
                <h1>
                    {this.state.text}
                </h1>
                <h2>
                    {this.state.evento}
                </h2>
            </div>
        )
    }

}
export default Input