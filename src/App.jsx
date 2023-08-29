import { Header } from './component/Header'
import { Post } from './component/Post'
import { Sidebar } from './component/Sidebar'
import style from './App.module.css'
import { posts } from './data'

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(data => (
              <Post
                key={data.id}
                author={data.author}
                content={data.content}
                publishedAt={data.publishedAt}
              />
            ))}
        </main>
      </div>
    </div>
  )
}

export default App
