import React from 'react'

class NativoSin extends React.Component{

    manejador = (e) => {
        e.preventDefault()
        console.log(e.nativeEvent)
    }

    render(){
        return(
            <div>
                <a
                href="https://google.com"
                onClick={this.manejador}
                >
                Google
                </a>
            </div>
        )
    }
}

export default NativoSin