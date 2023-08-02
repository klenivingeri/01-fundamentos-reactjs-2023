import { Header } from './component/Header'
import { Post } from './component/Post'
import { Sidebar } from './component/Sidebar'

import style from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Erick"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugit nostrum quae laboriosam vitae minus, voluptatum quam quisquam non fugiat omnis dignissimos maiores id earum perferendis doloribus consequatur velit! Earum?"
          />
          <Post
            author="Kleniving"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugit nostrum quae laboriosam vitae minus, voluptatum quam quisquam non fugiat omnis dignissimos maiores id earum perferendis doloribus consequatur velit! Earum?"
          />

        </main>
        
      </div>
    </div>
  )
}

export default App
