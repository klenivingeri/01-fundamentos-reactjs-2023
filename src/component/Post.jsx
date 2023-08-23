import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({author, content, publishedAt}) {
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
                <time title="11 de maio ás 8:13" dateTime={publishedAt} >Publicado  há 1h</time>
            </header>

            <div className={styles.content}>
                {content.map(text => (text.type === 'paragraph' 
                    ? <p>{text.content}</p>
                    : text.type === 'link' 
                        ? <p><a href="!#">{text.content}</a></p>
                        : <a href="!#">{text.content} </a>
                ))}
            </div>

            <form className={styles.commentForm} action='#'>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixei seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment name='BMO' src='https://pm1.aminoapps.com/6592/3575d361024e66e8ee382f8ee6bb46208452d122_00.jpg' />
                <Comment name='Princesa Jujuba' src='https://pm1.aminoapps.com/7694/f618481528d40b62fbd6ca2a1b1e30f89ba24db4r1-863-912v2_uhq.jpg' />
                <Comment name='Rei Gelado' src='https://cdn.costumewall.com/wp-content/uploads/2016/10/ice-king-costume.jpg' />
            </div>
        </article>
    )
}