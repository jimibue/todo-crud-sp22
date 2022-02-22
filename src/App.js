import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{margin:'20px'}}>
      <TodoList name='Coding Todolist' initialTodos={[{id:1, todo:'learn js', completed:false}]}/>
      <TodoList name='Pre Camping Todolist' initialTodos={[{id:1, todo:'by wood', completed:true},{id:2, todo:'by food', completed:false}]}/>
      {/* Mis use of this component */}
      {/* <TodoList name='Bad TODOLIST' initialTodos={[{x:1, y:'by wood', z:false}]}/> */}
      <TodoList name='Another List'/>
    </div>
  );
}

export default App;
