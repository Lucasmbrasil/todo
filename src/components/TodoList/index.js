import { useTodo } from "../../Providers/Provider";
// import "./styles.css";
import Done from "../Done";
import Todo from "../Todo";

function TodoList() {
  const { todoList, doneList } = useTodo();

  return (
    <div className="container">
      <ul>
        <h3>a fazer:</h3>
        {todoList.map((current, index) => (
          <Todo current={current} key={index} />
        ))}
      </ul>
      <ul>
        <h3>concluídas:</h3>

        {doneList.map((current, index) => (
          <Done current={current} key={index} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
