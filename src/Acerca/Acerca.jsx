import style from './Acerca.module.css'
import happy from '../assets/happy-hacker.gif'
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const Acerca = () => {

  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      {loading ? (
      <Loader />
  ) : (
    <div className={style.acercontainer }>
   
    <div className={style.containerText}>

      <h2 className={style.acerca}>¡Hola! Soy Maximiliano, un entusiasta de la tecnología, de nacionalidad Argentina. mi enfoque en la educación de técnico de pc y celulares me llevó a interesarme mas en el mundo de la programación y realmente me facino por ese motivo hoy en dia sigo mejorando y aprendiendo nuevas tecnologias, y gracias a la constancia, la practica, superar mis frustraciones y a nunca rendirme logre mis objetivos personales.



</h2> 
    <h2 className={style.acerca2}>En mi experiencia obtenida con mucha practica y dedicacion, me encamine por completo en el fascinante mundo del desarrollo web y la programacion y logre certificarme como Full Stack Developer en la escuela de programación "Soy Henry". Fue una experiencia gratificante y llena de desafios nuevos donde trabajar en equipo, tener mucha practica y dedicacion fueron la clave para afrontar todos los desafios a los que me enfrantaba dia a dia, estoy orgulloso de mis logros y espero algun dia conseguir ese anhelado trabajo de programador.

Mi habilidad para trabajar tanto en Frontend como Backend me permite abordar proyectos de manera integral, desde la creación de servidores y bases de datos hasta la construcción de interfaces de usuario atractivas y funcionales.

</h2>
    <h2 className={style.acerca3}>Si estás buscando un desarrollador comprometido,comunicativo,autonomo y responsable, estaré encantado de hablar contigo y explorar cómo puedo aportar valor a tu equipo.

¡Espero conocer nuevos desafíos y oportunidades emocionantes en el mundo de la tecnología!</h2>
    </div>
    <img className={style.gifi} src={happy} to='gif'/>
    
    </div>
    )}
    </div>
  )
}

export default Acerca