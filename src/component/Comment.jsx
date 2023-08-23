import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({src, name}) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={src} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong>{name}</strong>
                            <time title="11 de maio ás 8:13" dataTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Jake, Parabens !! 👏👏</p>
                </div>
                <footer>
                    <button>    
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}