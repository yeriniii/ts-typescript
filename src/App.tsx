import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="mx-4">
      <h2 className="text-3xl font-bold mb-3">Typescript TodoList</h2>
      <TodoForm />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
}

export default App;
