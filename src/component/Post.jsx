import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://i.pinimg.com/originals/cf/d0/e6/cfd0e65ab7aafae09ad428810da84609.jpg' />
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
                <p>👉 <a href="">Marshall Lee</a></p>
                <p>
                    <a href="">#Nova aventura</a>{' '}
                    <a href="">#partiu</a>
                </p>
            </div>
        </article>
    )
}