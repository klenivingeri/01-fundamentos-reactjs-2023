import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src='https://cdn.costumewall.com/wp-content/uploads/2016/10/ice-king-costume.jpg' alt=''/>
            <div className={styles.comentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}> 
                            <strong>Rei Gelado</strong>
                            <time title="11 de maio ás 8:13" dataTime="2023-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                    <button title='Deletar comentário'>
                        <Trash size={20} />
                    </button>
                    </header>
                    <p>Muito bom Jake, Parabens !! 👋👋</p>
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