import { useContext } from "react";
import { ToDoContext } from "@/Provider/TodoProvider";
import TodoAction from "./TodoAction";
import EditInput from "./EditInput";

import styles from "../styles/Home.module.css";

const AddTodo = ({ todo }, { index }) => {
  const {
    DeleteHandler,
    OnSaveHandler,
    OnCancelHandler,
    isEdit,
    setisEdit,
    editTodo,
    seteditTodo,
    handleDone,
  } = useContext(ToDoContext);

  const OnEditHandler = () => {
    seteditTodo(todo);
    setisEdit({ id: todo.id, edit: true });
  };

  const RemoveHandler = () => {
    DeleteHandler(todo);
  };
  return (
    <>
      <li className={`${styles.item} `} key={todo.id}>
        {isEdit.id === todo.id && isEdit.edit ? (
          <EditInput
            type="text"
            value={todo.message}
            name="message"
            edit={editTodo}
            setedit={seteditTodo}
            className="outline-none border border-slate-700 rounded-md p-1 my-1 w-full text-gray-700"
          />
        ) : todo.done ? (
          <p
            className={`${styles.done} w-full `}
            onClick={(e) => handleDone(todo.id)}
          >
            {todo.message}
          </p>
        ) : (
          <p className="w-full" onClick={(e) => handleDone(todo.id)}>
            {todo.message}
          </p>
        )}

        <TodoAction
          item={todo}
          isEdit={isEdit}
          OnCancelHandler={OnCancelHandler}
          OnEditHandler={OnEditHandler}
          OnDeleteHandler={RemoveHandler}
          OnSaveHandler={OnSaveHandler}
          key={index}
        />
      </li>
    </>
  );
};

export default AddTodo;
