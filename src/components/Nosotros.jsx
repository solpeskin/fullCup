import React from 'react'
import img from '../img/salpicado.png'

const Nosotros = () => {
  return (
    <div className='us' data-aos="zoom-in">
        <h3>Sobre nosotros</h3>
        <p data-aos="fade-up-right">
            El café, para algunos (como yo 🙋), es más que una bebida. Es una forma especial de conectarte. Esta simple bebida, tan especial, nos ayuda 
            a definir nuestro estado de ánimo durante el día...
        </p>
        <p data-aos="fade-up-right">Nuestra companía empezó en el 2020. Además de querer compartir nuestra pasión por el café,
            nuestro objetivo principal era lograr una conexión con el cliente a través de algo que
            sabemos que le gusta a todos. Queríamos darle un toque único y especial. Así nació FullCup. 
            Un poco de granos de café, azucar, leche, amor y... ¡Voilà!
        </p>
        <p data-aos="fade-up-right">En nuestras tiendas te esperamos para ofrecerte una bebida muy especial y personalizada. Hecha totalmente para vos.
            Con nuestros ingredientes únicos y secretos. Cada detalle de nuestros productos elaborados manualmente, está pensado totalmente en ti. 
        </p>
        <img src={img} alt="Café salpicado" />
    </div>
  )
}

export default Nosotros