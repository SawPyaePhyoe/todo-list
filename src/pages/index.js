"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import AddTask from "../components/AddTask";
import AddTodo from "@/components/AddTodo";
import { useContext } from "react";
import { ToDoContext } from "@/Provider/TodoProvider";

export default function Home() {
  const { ErrorRemove, TodoAdd, todoList, settodoList, data, show } =
    useContext(ToDoContext);

  return (
    <div className="max-w-[700px] mx-3 pb-14 md:mx-auto">
      <div className="pt-12">
        <h1 className="text-4xl">Todo App</h1>
      </div>
      <div className="pt-12 ">
        <AddTask />
        <form onSubmit={TodoAdd} className="flex  gap-1">
          {show && (
            <>
              <input
                autoFocus
                type="text"
                name=""
                id="task"
                className="w-full rounded py-2 px-4 text-gray-900 border border-gray-700 outline-0 "
                value={todoList}
                onKeyPress={ErrorRemove}
                onChange={(e) => settodoList(e.target.value)}
              />
              <button className=" hover:bg-transparent bg-blue-500 hover:text-blue-700 font-semibold text-white py-2 px-4 border hover:border-blue-500 border-transparent rounded uppercase">
                Add
              </button>
            </>
          )}
        </form>
      </div>
      <div className="pt-12">
        <ul>
          {data && data.length > 0
            ? data.map((todo, index) => <AddTodo todo={todo} index={index} />)
            : null}
        </ul>
      </div>
    </div>
  );
}
