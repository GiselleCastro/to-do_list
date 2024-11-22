import styles from './Input.module.css'
import plus from '../assets/plus.svg'
import { ChangeEvent, FormEvent } from 'react'


interface InputProps {
    inputTask: string;
    handlerCreateTask: (event: FormEvent) => void;
    handlerChangeInputCreateTask: (event: ChangeEvent<HTMLInputElement>) => void;
    isNewTaskEmpty: boolean;
}

export function Input({
    inputTask,
    handlerCreateTask,
    handlerChangeInputCreateTask,
    isNewTaskEmpty
}: InputProps) {
    return <form
        onSubmit={handlerCreateTask}
        action="">
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={inputTask}
                onChange={handlerChangeInputCreateTask}
            />
            <button
                className={styles.buttonCreateTask}
                type="submit"
                disabled={isNewTaskEmpty}>
                <div className={styles.textButton}>
                    Criar
                    <img className={styles.img} src={plus} alt="" />
                </div>
            </button>
        </div>
    </form>
}