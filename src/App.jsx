import './App.css'
import { Counter } from './components/Counter'

function App() {

  const styles = {
    color: "green"
  }

  return (
    <div style={styles}>
      <Counter></Counter>
    </div>
  )
}

export default App
