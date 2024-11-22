import rockerLogo from '../assets/rocket-logo.svg'
import styles from './Header.module.css'

export function Header() {
    return <header>
        <div className={styles.div}>
            <img className={styles.img} src={rockerLogo} />
            <span className={styles.to}>to</span>
            <span className={styles.do}>do</span>
        </div>
    </header>
}