import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        className={style.cover}
      />

      <div className={style.profile}>
        <div className={style.photo}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
          />
        </div>
        <strong>Erick Klenviving</strong>
        <span>Full Stack developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
