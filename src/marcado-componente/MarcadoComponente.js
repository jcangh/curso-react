import React, { Component } from 'react'

class MarcadoComponente extends Component{

    state = {
        marcado: `
            <h1>Inyectando HTML con react</h1>
            <br/>
            <hr/>
            <a href="#">Algun Link</a>
        `
    }

    render(){
        return (
            <div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.state.marcado
                    }}
                    >
                </div>
            </div>
        )
    }
}
export default MarcadoComponente