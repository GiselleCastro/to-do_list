import iconList from '../assets/icon-list.svg'
import styles from './ListEmpty.module.css'

export function ListEmpty() {
    return <div className={styles.noTask}>
        <img src={iconList} alt="Símbolo de lista" />
        <p className={styles.paragraphMain}>
            Você ainda não tem tarefas cadastradas
        </p>
        <p>
            Crie tarefas e organize seus itens a fazer
        </p>

    </div>
}