import { useTodo } from "../../Providers/Provider";
// import "./styles.css";
import { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  ContainerAnimation,
  StyledButton,
  StyledDialogTitle,
  StyledTypography,
} from "../../styles/card";

const Todo = ({ current }) => {
  const [deleteTodo, setDeleteTodo] = useState(false);
  const { addDoneList, deleteTodoList } = useTodo();
  return (
    <ContainerAnimation>
      <p>{current}</p>
      <div className="buttons">
        <DoneIcon
          onClick={() => {
            addDoneList(current);
            deleteTodoList(current);
          }}
        />

        <DeleteIcon className="delete" onClick={() => setDeleteTodo(true)} />
      </div>
      <Dialog
        onClose={() => setDeleteTodo(false)}
        aria-labelledby="customized-dialog-title"
        open={deleteTodo}
      >
        <StyledDialogTitle>Cuidado!</StyledDialogTitle>
        <DialogContent dividers>
          <StyledTypography gutterBottom>
            Você tem certeza que deseja excluir essa tarefa?
          </StyledTypography>
        </DialogContent>
        <DialogActions>
          <StyledButton
            autoFocus
            onClick={() => {
              setDeleteTodo(false);
            }}
            color="primary"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            autoFocus
            onClick={() => {
              deleteTodoList(current);
              setDeleteTodo(false);
            }}
            color="primary"
          >
            Confirmar
          </StyledButton>
        </DialogActions>
      </Dialog>
    </ContainerAnimation>
  );
};
export default Todo;
