
const user1 = {
    name: 'Juan Angulo',
    username: 'ingjca',
    country: 'Colombia',
    social: {
        facebook: 'https://facebook.com/juangota'
    }
}

const saluda = (user) =>{
    const { name, social } = user
    const { facebook } = social

    const orden = [ 'pizza', 'gaseosa', 'gomitas', 'lentejas', 'pollo']
    const [ comida, bebida, postre, ...restantes]  = orden

    console.log(
        `Hola soy ${name} y me gusta la ${comida} y restantes ${restantes}`
    )
}

saluda(user1)