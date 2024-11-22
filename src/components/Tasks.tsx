import styles from './Tasks.module.css'
import Trash from '../assets/trash.svg?react';
import check from '../assets/check.svg'

export interface TaskType {
    id: string;
    task: string;
    isCompleted: boolean;
}

interface TaskTypeProps extends TaskType {
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string) => void;
}

export function Task({ id, task, isCompleted, onCheckTask, onDeleteTask }: TaskTypeProps) {
    const handlerTaskCompleted = (): void => {
        onCheckTask(id)
    }

    const handlerDeleteTask = (): void => {
        onDeleteTask(id)
    }

    return <div className={styles.task}>
        <label
            htmlFor={id}
        >
            <input
                className={styles.checkTaskCompleted}
                type="checkbox"
                name='task'
                value={task}
                id={id}
                checked={isCompleted}
                onChange={() => { }}
                onClick={handlerTaskCompleted} />

            <span className={styles.checkTaskCompletedCustom}>
                {isCompleted && <img src={check} alt="Marcado" />}
            </span>

            <p className={styles.checkTextTask}>{task}</p>

        </label>

        <button
            className={styles.trash}
            onClick={handlerDeleteTask}>
            <Trash className={styles.imgTrash} />
        </button>
    </div>
}