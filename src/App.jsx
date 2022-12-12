import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'

import style from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Aside/>
        <main>b</main>
      </div>
    </>
  )
}

export default App
