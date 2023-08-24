import Addtodo from "./components/Addtodo"
import Navbar from "./components/Navbar"
import TodoData from "./components/TodoData"
import "./App.css"

 const App = () => {
  return (
    <main>
      <h2>TODO REACT + TYPESCRIPT</h2>
      <Navbar />
      <Addtodo />
      <TodoData />
    </main>
  )
}

export default App