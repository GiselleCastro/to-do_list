import { v4 as uuid } from 'uuid';
import { TaskType } from './components/Tasks';

export const taskList: TaskType[] = [
    {
        id: uuid(),
        task: 'Estudar',
        isCompleted: false,
    },
    {
        id: uuid(),
        task: 'Arrumar',
        isCompleted: false,
    },
    {
        id: uuid(),
        task: 'Organizar os materiais do escritório e ordenas os arquivos em ordem cronológica',
        isCompleted: true,
    }
]