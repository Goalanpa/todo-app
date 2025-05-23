import { useState } from "react";

function App(){
  const [todos, setTodos] = useState([]);     //存所有todos陣列
  const [input, setInput] = useState([]);     //user input

  //當按下按鈕時的動作
  const addTodos = () => {
    if(input.trim() === '')return;            //如果是空的就不加
    setTodos([...todos, input]);              //把新的todo加入陣列
    setInput('');  
  };

  //刪除一筆
  const deleteTodos = (indexToDelete) => {
    const newTodos = todos.filter((_, idx) => idx !== indexToDelete);
    console.log("刪除的索引",indexToDelete);
    setTodos(newTodos);
  }

  return(
    <div style={{ padding: '20px' }}>
      <h1>📝 My Todo List</h1>

      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a Task"
        style={{ marginRight: '10px' }}
      />
      <button onClick={addTodos}>Add</button>

      <ul>
        {todos.map((todo,idx) => (
          <li key={idx}>✅ {todo}
           <button onClick={() => deleteTodos(idx)} style={{ marginLeft: '10px' }}>
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;