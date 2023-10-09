import style from './Header.module.css';
import SertaoCompImg from '../assets/sertaocomp-logo.svg';

interface Props{
  title:string;
}

export function Header({title}:Props) {
  
  return (
    <header className={style.header}>
      <img src={SertaoCompImg}/>

      <strong className={style.title}>{title}</strong> 

    </header>
  )
}
