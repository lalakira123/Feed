import { useState } from 'react'

import { Avatar } from './../Avatar/Avatar'
import { Comment } from './../Comment/Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

import style from './Post.module.css'

export function Post({ author, publishedAt, contents }) {
  const publishedAtFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedAtToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [ comments, setComments ] = useState([]);
  const [ newComment, setNewComment ] = useState('');

  function handleComment() {
    event.preventDefault();

    setComments([...comments, newComment]);

    setNewComment('');
  }

  function handleNewCommentOnChange() {
    setNewComment(event.target.value);
  }

  return(
    <article className={style.post}>
      <header>
        <div className={style.profile}>
          <Avatar 
            imageUrl={author.imageUrl}
            hasBorder
          />
          
          <div className={style.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormat} dateTime={publishedAt.toISOString()}>
          {publishedAtToNow}
        </time>
      </header>

      <div className={style.content}>
        {contents.map(content => {
          if(content.type == 'paragraph') {
            return <p key={content.content}>{content.content}</p>
          } else if(content.type == 'link') {
            return <p key={content.content}><a href='#'>{content.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name='comment'
          placeholder='Escreva um comentário...'
          onChange={handleNewCommentOnChange}
          value={newComment}
        />
        <button type='submit'>Publicar</button>
      </form>

      <div className={style.comment}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment}
              comment={comment}
            />
          )
        })}
      </div>
    </article>
  );
}