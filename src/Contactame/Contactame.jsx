import style from './Contactame.module.css'
import yo from '../assets/yo.png'
import gmail from '../assets/gmail1.gif'
import whatsapp from '../assets/whatsapp.gif'
import linkedin from '../assets/linkedin.gif'
import github from '../assets/Github1.gif'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
const Contactame = () => {

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
    
    <div className={style.ContactContainer}>
      
      <div className={style.imageyo}>

      <img className={style.fotocontact} src={yo} to='Kenny foto'/>
      
      </div>
      <div className={style.contactinfo}>

      <h2 className={style.titulocontact}>Contactame</h2>
    <div className={style.correoIcon}>
      
      <img className={style.iconmail} src={gmail} to='email'/>
      <h2 className={style.correo}>piolattoemanuel@gmail.com</h2>
    </div>
      <div className={style.whatsappContainer}>
      <img className={style.whatsappicon} src={whatsapp} to='whatsappicon'/>
      <h2 className={style.numero}>+54 3584 448512</h2>
    </div>
      <div className={style.linkedinContainer}>
      <img className={style.linked} src={linkedin} to='linkedin'/>
      <Link className={style.linkedlink} to='https://www.linkedin.com/in/maxi-piolatto/' target="_blank">
      <h2 className={style.linkedtext}>Linkedin Maximiliano Piolatto </h2>
      </Link>
      </div>
      <div className={style.gitContainer}>
      <img className={style.imagegit} src={github} to='github' />
      <Link className={style.gitlink} to='https://github.com/Maxip32' target="_blank">
      <h2 className={style.gittext}>/Maxip32</h2>
      </Link>

      </div>
      </div>

    </div>
  )}
      </div>
  )
}

export default Contactame