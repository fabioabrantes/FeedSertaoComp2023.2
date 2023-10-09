import {Avatar} from './Avatar';

import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';


type Props = {
  content:string;
  onDeleteComment: (contentParams:string)=>void;
}

export function Comment({content,onDeleteComment}:Props) {

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fabioabrantes.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Abrantes</strong>
              <time title="10 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{0}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}