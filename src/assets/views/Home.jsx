import React from 'react'

const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='text-center mt-2'>Bienvenido maestro Pokémon</h1>
        <img 
            src="./src/assets/img/pikachu.png"
            width={400}
            alt="pikachu"
        />
    </section>
  )
}

export default Home