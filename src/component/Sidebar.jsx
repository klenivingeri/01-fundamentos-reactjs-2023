import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        src="https://cdn.akamai.steamstatic.com/steam/apps/728240/capsule_616x353.jpg?t=1669902198"
        className={style.cover}
      />

      <div className={style.profile}>
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/adventure-time-hey-ice-king/e/ef/FinnHeadshot.jpg"
          />
        <strong>Finn</strong>
        <span>Aventureiro</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
