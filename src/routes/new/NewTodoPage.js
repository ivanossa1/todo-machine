import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { addTodo } = useTodos();

    return(
      <TodoForm 
        label="Escribe tu nuevo TODO"
        submitText="Añadir"
        submitEvent={(text) => addTodo(text)}
      />
    );
}

export { NewTodoPage }