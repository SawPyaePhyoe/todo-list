import { createContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { v4 as uuid } from "uuid";

export const ToDoContext = createContext();
const TodoProvider = (props) => {
  const [data, setdata] = useState([]);
  const [editTodo, seteditTodo] = useState();
  const [isEdit, setisEdit] = useState({ id: "", edit: false });
  const [todoList, settodoList] = useState();
  const [isFirst, setIsFirst] = useState(true);
  const [show, setshow] = useState(false);

  function LS() {
    if (typeof window !== "undefined") {
      console.log(JSON.parse(localStorage.getItem("react_ToDo")));
      return JSON.parse(localStorage.getItem("react_ToDo")) || [];
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      !isFirst && localStorage.setItem("react_ToDo", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const s = LS();
    setdata(s);
    setIsFirst(false);
  }, []);

  console.log(data);

  const handleDone = (id) => {
    const _items = data.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });
    setdata(_items);
  };

  const TodoAdd = (e) => {
    e.preventDefault();
    const error = document.getElementById("task");

    console.log(data);
    if (todoList) {
      setdata([...data, { id: uuid(), message: todoList, done: false }]);
      settodoList("");
      setshow(false);
    } else {
      setshow(true);
      error.classList.add(`${styles.error}`);
    }
  };

  const updateTodo = () => {
    const update = data.map((item) => {
      if (item.id == editTodo.id) {
        return editTodo;
      }
      return item;
    });
    setdata(update);
  };

  const ErrorRemove = () => {
    const error = document.getElementById("task");
    error.classList.remove(`${styles.error}`);
  };
  const InputShow = () => {
    setshow(true);
  };
  const DeleteHandler = (todo) => {
    const conFirm = confirm(
      `Are you sure you want to delete "${todo.message}"`
    );
    const deletedTask = data.filter((item) => item.id !== todo.id);
    conFirm ? setdata(deletedTask) : setdata(data);
  };

  const OnCancelHandler = () => {
    setisEdit({ ...isEdit, edit: false });
  };
  const OnSaveHandler = () => {
    updateTodo();
    setisEdit({ ...isEdit, edit: false });
  };

  return (
    <ToDoContext.Provider
      value={{
        show,
        setshow,
        data,
        setdata,
        handleDone,
        DeleteHandler,
        InputShow,
        OnSaveHandler,
        OnCancelHandler,
        ErrorRemove,
        TodoAdd,
        todoList,
        settodoList,
        isEdit,
        setisEdit,
        editTodo,
        seteditTodo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default TodoProvider;
