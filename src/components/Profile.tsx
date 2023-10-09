import {PencilSimpleLine} from '@phosphor-icons/react'


import styles from './Profile.module.css';


export function Profile(){
  return (
    <aside className={styles.barSide}>
      <header>
          <img 
            className={styles.coverProfile}
            src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          />
      </header>

      <main className={styles.profileUser}>
        <img src="https://github.com/fabioabrantes.png"/>

        <strong className={styles.nameUser}>Fabio abrantes</strong>

        <span> professor de web II</span>
      </main>

      <footer className={styles.buttonEdit}>
        
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}