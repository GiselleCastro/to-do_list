import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { SectionTask } from './components/SectionTask'
import { taskList } from './mockTaskList'


function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SectionTask tasks={taskList} />
      </div>
    </>
  )
}

export default App
