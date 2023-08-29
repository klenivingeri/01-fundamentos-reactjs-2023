import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { commentsInit } from '../data'
import { useState } from 'react'

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(commentsInit)

    const publishedDateFormatted = format(
        publishedAt,
        "dd 'de' LLLL 'ás' HH:mm'h'",
        { locale: ptBR }
    )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
            locale: ptBR,
            addSuffix: true
        })
    
    const handleCreateNewComment = () => {
        event.preventDefault() //Evita enviar para outra pagina
        setComments([...comments, {id: comments.length +1}])
        
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div> 
                </div> 
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(text => (text.type === 'paragraph' 
                    ? <p key={text.content}>{text.content}</p>
                    : text.type === 'link' 
                        ? <p key={text.content} ><a href="!#">{text.content}</a></p>
                        : <a key={text.content} href="!#">{text.content} </a>
                ))}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm} action='#'>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixei seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
               { comments.map(comment => 
                 <Comment key={comment?.id} name='BMO' src='https://pm1.aminoapps.com/6592/3575d361024e66e8ee382f8ee6bb46208452d122_00.jpg' />
                )}
            </div>
        </article>
    )
}