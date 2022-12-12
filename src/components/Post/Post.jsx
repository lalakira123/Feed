import style from './Post.module.css'

export function Post() {
  return(
    <article className={style.post}>
      <header>
        <div className={style.profile}>
          <img 
            className={style.avatar}
            src='https://github.com/lalakira123.png'
            alt='Foto Perfil'
          />
          <div className={style.info}>
            <strong>Laerte Akira</strong>
            <span>Developer Full Stack</span>
          </div>
        </div>

        <time title="12 de Dezembro às 15:17h" dateTime='2022-12-12 15:17:30'>Publicado há 1h</time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
          evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href='#'>jane.design/doctorcare</a></p>
        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form >
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Escreva um comentário...'
        />
        <button type='submit'>Publicar</button>
      </form>
    </article>
  );
}