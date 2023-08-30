import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { commentsInit } from '../data'
import { useState } from 'react'

export function Post({author, content, publishedAt}) {
    const [comments, setComments] = useState(commentsInit)
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(
        publishedAt,
        "dd 'de' LLLL 'ás' HH:mm'h'",
        { locale: ptBR }
    )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
            locale: ptBR,
            addSuffix: true
        })
    
    const handleNewCommentChange = (e) => setNewCommentText(e.target.value)
    
    const handleCreateNewComment = (e) => {
        e.preventDefault() //Evita enviar para outra pagina
        setComments([...comments, {
            id: comments.length +1,
            author:{
                name: 'Princesa Jujuba',
                avatarUrl: 'https://pm1.aminoapps.com/7694/f618481528d40b62fbd6ca2a1b1e30f89ba24db4r1-863-912v2_uhq.jpg'
            },
            cmmnt: newCommentText
        }])
        setNewCommentText('') //limpa
    }

    const deleteComment = (id) => {
        const commentsWithoutDeleteOne = comments.filter(comment => comment.id !== id)
        setComments(commentsWithoutDeleteOne);
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
                    name='comment' //oque passar no name, da pra pegar no target
                    placeholder='Deixei seu comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
               { comments.map(comment => 
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        name={comment.author.name}
                        src={comment.author.avatarUrl}
                        comment={comment.cmmnt}
                        onDeleteComment={deleteComment}
                    />
                )}
            </div>
        </article>
    )
}