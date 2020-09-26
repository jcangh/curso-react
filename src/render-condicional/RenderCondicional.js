import React from 'react'

const Saludo = (props) =>{
    return (
        <div>
            <div>
    { props.name && <strong>{props.name}</strong>}
            </div>
            {
                props.saluda
                ? (
                    <h1>Hola, este es un saludo</h1>
                )
                :(
                    <h1>Upss, no hay saludo</h1>
                )
            }
        </div>
    )
}

export default Saludo