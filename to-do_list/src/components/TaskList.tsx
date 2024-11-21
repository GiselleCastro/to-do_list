import { Task } from "./Tasks"
import styles from "./TaskList.module.css"
import { ListEmpty } from "./ListEmpty"
import { TaskProps } from "./SectionTask"

interface TaskListProps extends TaskProps {
    totalNumberTask: number;
    numberTasksCompleted: number;
    onCountTaskCompleted: () => void;
    onDeleteTask: (id: string) => void;
    onCheckTask: (id: string) => void;
}

export function TaskList({
    tasks,
    totalNumberTask,
    numberTasksCompleted,
    onDeleteTask,
    onCheckTask }: TaskListProps) {

    return <div>
        <header className={styles.top}>
            <p className={styles.tasksCreated}>
                Tarefas criadas <span>{totalNumberTask}</span>
            </p>
            <p className={styles.tasksCompleted}>
                Concluídas <span>{numberTasksCompleted} de {totalNumberTask}</span>
            </p>
        </header>
        {tasks.map(task => <Task
            key={task.id}
            {...task}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask} />)}

        {!totalNumberTask && <ListEmpty />}
    </div>
}