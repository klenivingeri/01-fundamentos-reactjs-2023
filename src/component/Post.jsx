import styles from './Post.module.css'
import { Comment } from './Comment'
export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} height='60' src='https://i.pinimg.com/originals/cf/d0/e6/cfd0e65ab7aafae09ad428810da84609.jpg' />
                    <div className={styles.authorInfo} >
                    <strong>Jake o cachorro</strong>
                    <span>Aventureiro</span>
                    </div> 
                </div> 
                <time title="11 de maio ás 8:13" dataTime="2023-05-11 08:13:30">Publicado  há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir um novo episódio da nova tempoderada de Adventure Time.</p>
                <p>👉 <a href="!#">Marshall Lee</a></p>
                <p>
                    <a href="!#">#Nova aventura</a>{' '}
                    <a href="!#">#partiu</a>
                </p>
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
                <Comment name='BMO' img='https://pm1.aminoapps.com/6592/3575d361024e66e8ee382f8ee6bb46208452d122_00.jpg' />
                <Comment name='Princesa Jujuba' img='https://pm1.aminoapps.com/7694/f618481528d40b62fbd6ca2a1b1e30f89ba24db4r1-863-912v2_uhq.jpg' />
                <Comment name='Rei Gelado' img='https://cdn.costumewall.com/wp-content/uploads/2016/10/ice-king-costume.jpg' />
            </div>
        </article>
    )
}