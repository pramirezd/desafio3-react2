import React from 'react'

const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='text-center'>Bienvenido maestro Pokemón</h1>
        <img 
            src="./src/assets/img/pikachu.png"
            width={500}
            alt="pikachu"
        />
    </section>
  )
}

export default Home