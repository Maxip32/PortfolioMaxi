import style from './Loader.module.css';
import Loading from '../assets/Infinite Loader.gif'

const Loader = () => {

 

  return (
    <div className={style.loader} >
      <img className={style.load} src={Loading} alt="loader" />
    </div>
  )
}

export default Loader;
