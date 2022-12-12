import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'
import { Post } from './components/Post/Post'

import style from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Aside/>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
