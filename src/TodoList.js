// im TodoList engineer making it generic/resuable
import { useState } from "react";
const TodoList = (props) => {
  // if a initialTodos props was give use that is initial state, else use the []
  const [todos, setTodos] = useState(props.initialTodos || []);
  const [todo, setTodo] = useState('')

  // READ
  // [{id,todo,completed},...] => [<p>todo</p>,....]
  const renderTodos = () => {
    return todos.map((x) => {
      return (
        <div
          key={x.id}
          style={{ textDecoration: x.completed ? "line-through" : "" }}
        >
          <p onClick={() => toggleTodo(x.id)}>{x.todo}</p>
          <button onClick={()=> deleteTodo(x.id)}>delete</button>
        </div>
      );
    });
  };
  const toggleTodo = (idOfTodoClicked)=>{
      const updatesTodos = todos.map((todo)=>{
          if(todo.id === idOfTodoClicked){
              return {...todo, completed: !todo.completed}
          }
          return todo
      })
      setTodos(updatesTodos)
  }

  const deleteTodo = (id) => {
      let filterTodos = todos.filter(x=>{
          return x.id !== id
      })
      setTodos(filterTodos)
  }
  const handleSubmit = (event)=>{
      event.preventDefault()
      console.log(event)
      console.log('todo:', todo)
      // add todo with out mutating
      const newTodos = [...todos, {id: Math.random(), todo: todo, completed:false}]
      setTodos(newTodos)
      setTodo('')
}


  return (
    <div>
      <h1>{props.name}</h1>
      <form onSubmit={handleSubmit}>
          <p>todo: </p>
          <input value={todo} onChange={(e)=> {setTodo(e.target.value)} }/>
          <button type='submit'>add</button>
  
      </form>
      <div>{renderTodos()}</div>
    </div>
  );
};

export default TodoList;
