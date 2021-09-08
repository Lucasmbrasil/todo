import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <main>
      <GlobalStyle />
      <h1>
        {" "}
        to<span className="do">.do</span>
      </h1>
      <Form />
      <TodoList />
    </main>
  );
}

export default App;
