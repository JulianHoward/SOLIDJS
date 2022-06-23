
import { createSignal } from 'solid-js';
import { TodoListItem } from './TodoListItem';

function App() {
  const [todos, setTodos] = createSignal([
    { text: 'Pasear al perro', complete: false },
    { text: 'Acabar el proyecto de investigación', complete: true },
    { text: 'Avanzar en el proyecto final', complete: false},
    { text: 'Pagar mensualidad', complete: false},
  ]);

  return (
    <ul>
      <For each={todos()}>
        {(todo) => <TodoListItem todo={todo} setTodos={setTodos} />}
      </For>
    </ul>
  );
}

export default App;
