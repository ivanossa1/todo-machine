import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodoForm } from '../../ui/TodoForm';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { ChangeAlert } from "../../ui/ChangeAlert";


function HomePage() {
  const navigate = useNavigate();
  const {
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            //openModal,
            //setOpenModal,
            totalTodos, 
            completedTodos,
            searchValue, 
            setSearchValue,
            //addTodo,
            sincronizedTodos
          } = useTodos();

  
  return (
      <React.Fragment>
       <TodoHeader loading={loading}>
          <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
       
       </TodoHeader>

        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchResults={
            (searchText) => <p>No hay resultados para {searchText}</p>
          }
        >
          {todo => (
           <TodoItem 
                 key={todo.id} 
                 text={todo.text} 
                 completed={todo.completed}
                 onComplete={() => completeTodo(todo.id)}
                 onDelete={() => deleteTodo(todo.id)}
                 onEdit={() => {
                    navigate(
                        '/edit/' + todo.id, 
                        {
                            state: { todo }
                        }
                    );
                }}
            />
          )}
        </TodoList>


  
    {/*!!openModal && (
    <Modal>
      <TodoForm 
        addTodo={addTodo}
        setOpenModal={setOpenModal}
      />
    </Modal>
    )*/}

    <CreateTodoButton 
        onClick={() => navigate('/new')}
      //setOpenModal={setOpenModal}    
    />

      <ChangeAlert
        sincronize={sincronizedTodos}
      />
    </React.Fragment>
    );
}

export { HomePage };
