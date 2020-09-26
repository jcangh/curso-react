import React, { Component } from 'react'

const Title = (props) =>{
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: props.uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    console.log(props.children)

    return (
        <h1 style={styles}>
            {props.children}
        </h1>
    )
}

class PropEspecial extends Component{
    
    state = {
        uiColor: 'purple'
    }
    
    render(){
        return (
            <div>
                <Title 
                    uiColor={this.state.uiColor}
                >
                    Super <em>Ninja</em>
                </Title>
            </div>
        )
    }
}

export default PropEspecial