import { IconButton, Paper, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";
import { useTodo } from "../../Providers/Provider";
function Form() {
  const { addTodoList, todoList, doneList } = useTodo();
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState(false);

  return (
    <div>
      <Paper className="search">
        <input
          placeholder="adicionar nova tarefa"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <IconButton
          disabled={userInput.length === 0}
          onClick={() => {
            todoList.includes(userInput)
              ? setMessage(true)
              : doneList.includes(userInput)
              ? setMessage(true)
              : addTodoList(userInput);
          }}
        >
          +
        </IconButton>
      </Paper>
      <Snackbar
        open={message}
        autoHideDuration={2000}
        onClose={() => setMessage(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert elevation={6} variant="filled" severity="error">
          Tarefa já adicionada!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
export default Form;
