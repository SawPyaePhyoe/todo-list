import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/Home.module.css";
import { ToDoContext } from "@/Provider/TodoProvider";
import { useContext } from "react";

const AddTask = () => {
  const { InputShow } = useContext(ToDoContext);

  return (
    <p
      onClick={InputShow}
      className="cursor-pointer  w-full flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Add new task
      <AiOutlinePlus size={12} className="ml-2" />
    </p>
  );
};

export default AddTask;
