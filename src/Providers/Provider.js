import { useContext, useState } from "react";
import { createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const addTodoList = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const deleteTodoList = (deletedTodo) => {
    const remove = todoList.filter((item) => item !== deletedTodo);
    return setTodoList(remove);
  };
  const addDoneList = (favTodo) => {
    const favorite = todoList.find((item) => item === favTodo);
    // const remove = todoList.filter((item) => item !== favTodo);
    // setTodoList(remove);
    setDoneList([...doneList, favorite]);
  };
  const deleteDoneList = (deletedTodo) => {
    const remove = doneList.filter((item) => item !== deletedTodo);
    return setDoneList(remove);
  };

  return (
    <TodoContext.Provider
      value={{
        addTodoList,
        deleteTodoList,
        addDoneList,
        deleteDoneList,
        todoList,
        doneList,
        setTodoList,
        setDoneList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodo = () => useContext(TodoContext);
