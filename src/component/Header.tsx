import styles from './Header.module.css'
import IgniteLogo from '../assets/adventure.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img title='Adventure Time' src={IgniteLogo}/>
    </header>
  )
}