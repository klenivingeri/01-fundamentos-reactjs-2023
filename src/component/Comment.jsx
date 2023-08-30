import { ThumbsUp, ThumbsDown, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({id, src, name, comment, onDeleteComment}) {
    const [likeCount, setLikeCount ] = useState(0)

    const handleThumbsUpComment = () => {
        const add = likeCount+1
        setLikeCount(add) // valor atual 
    }
    const handleThumbsDownComment = () => {
        setLikeCount((sub) => sub - 1) // valor atual
        
    }

    const handleDeleteComment = () => {
        onDeleteComment(id)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={src} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong>{name}</strong>
                            <time title="11 de maio ás 8:13" dateTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button 
                            onClick={handleDeleteComment} 
                            title='Deletar comentário'
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button className={styles.thumbsUp} onClick={handleThumbsUpComment}>    
                        <ThumbsUp size={20} />
                    </button>
                    <button className={styles.thumbsDown} onClick={handleThumbsDownComment}>    
                        <ThumbsDown size={20} />
                    </button>
                    <span>{likeCount}</span>
                </footer>
            </div>
        </div>
    )
}