import { useState,FormEvent} from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

type Author = {
  avatarUrl: string,
  name: string,
  role: string
}
type Content = {
  type:string;
  text?: string;
  texts?: string[];
  links?: string[];
}
type Props = {
  author:Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({author, content,publishedAt}:Props){
 const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string []>([]);

  /* coloca aspa simples para o date-fns entender que não é para formatar */
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true /* coloca o há, há cerca,... prefixo */
  });

  /* add no array de comentário */
  function handleCrateNewCommentArray(event:FormEvent) {
    event.preventDefault()
    setComments([...comments,comment]);
    setComment('');
  }

  /* seta um comentário no estado */
  function handleNewCommentChange(event:FormEvent) {
    setComment((event.target as HTMLTextAreaElement).value)
    console.log(comment);
  }

  function handleNewCommentInvalid(event:FormEvent) {
    (event.target as HTMLTextAreaElement).setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(comment:string) {
    // imutabilidade => as variáveis não sofrem mutações, criamos um novo valor(um novo espaço na memória)
    const arrayTemp = comments;
    const filterArray = arrayTemp.filter(item =>item !== comment);
    setComments([...filterArray]);
  }
  
  const isNewCommentEmpty = false;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {"Publicado" + publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((frase)=> {
            if(frase.type ==='paragraph'){
              return <p>{frase.text}</p>
            }else if(frase.type ==='link'){
              return (
                <p>
                  {
                    frase.texts?.map((text,index)=>(
                     frase.links && <a href={frase.links[index]}>#{text}</a>
                    ))
                  }
                </p>
              )
            }
          })
        }
      </div>

      <form onSubmit={handleCrateNewCommentArray} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          required
          value={comment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>
     
      <div className={styles.commentList}>
        {
          comments.map(comment =>(
            <Comment 
              key={comment + new Date()}
              content={comment} 
              onDeleteComment={()=>deleteComment(comment)}
            />
          ))
        }
      </div>
    </article>
  )
}

