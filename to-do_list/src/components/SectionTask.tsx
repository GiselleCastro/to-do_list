import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskList } from './TaskList';
import { TaskType } from './Tasks';
import { v4 as uuid } from 'uuid';
import { Input } from './Input'

export interface TaskProps {
    tasks: TaskType[];
}

export function SectionTask({ tasks }: TaskProps) {
    const [inputTask, setInputTask] = useState('');

    const [taskList, setTaskList] = useState(tasks)

    const [totalNumberTask, setTotalNumberTask] = useState(taskList.length)

    const tasksCompleted = taskList.filter(i => i.isCompleted).length

    const [numberTasksCompleted, setNumberTasksCompleted] = useState(tasksCompleted)

    const countTaskCompleted = () => {
        const numberTasks = taskList.filter(i => i.isCompleted).length
        setNumberTasksCompleted(numberTasks)
    }

    const deleteTask = (id: string) => {
        const tasksWithoutTashDelete = taskList.filter(task => task.id !== id)
        const totalTasks = tasksWithoutTashDelete.length
        const numberTasks = tasksWithoutTashDelete.filter(i => i.isCompleted).length
        setTotalNumberTask(totalTasks)
        setNumberTasksCompleted(numberTasks)
        setTaskList(tasksWithoutTashDelete)
    }

    const handlerCreateTask = (event: FormEvent) => {
        event?.preventDefault();
        const newListTasks = [...taskList, {
            id: uuid(),
            task: inputTask,
            isCompleted: false
        }]
        setTaskList(newListTasks)
        setTotalNumberTask(newListTasks.length)
        setNumberTasksCompleted(newListTasks.filter(task => task.isCompleted).length)
        setInputTask('');
    }

    const handlerChangeInputCreateTask = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('')
        const textInputTask = event.target.value;
        setInputTask(textInputTask);
    }

    const checkTask = (id: string) => {
        const listTasksUpdate = taskList.map(task => {
            if (task.id === id) return { ...task, isCompleted: !task.isCompleted }
            return task
        })
        const numberTasks = listTasksUpdate.filter(i => i.isCompleted).length
        setNumberTasksCompleted(numberTasks)
        setTaskList(listTasksUpdate)
    }

    const isNewTaskEmpty = inputTask.length === 0

    return <>
        <Input
            inputTask={inputTask}
            handlerCreateTask={handlerCreateTask}
            handlerChangeInputCreateTask={handlerChangeInputCreateTask}
            isNewTaskEmpty={isNewTaskEmpty} />
        <TaskList tasks={taskList}
            totalNumberTask={totalNumberTask}
            numberTasksCompleted={numberTasksCompleted}
            onCountTaskCompleted={countTaskCompleted}
            onDeleteTask={deleteTask}
            onCheckTask={checkTask}
        />
    </>
}