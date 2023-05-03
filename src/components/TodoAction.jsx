const TodoAction = ({
  item,
  OnDeleteHandler,
  OnEditHandler,
  OnSaveHandler,
  OnCancelHandler,
  isEdit,
}) => {
  const Edit = (
    <div className="flex ">
      <button
        className="ml-5 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded uppercase"
        onClick={OnEditHandler}
      >
        edit
      </button>
      <button
        className="ml-5 bg-transparent hover:bg-red-700 text-red-900 font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded uppercase"
        onClick={OnDeleteHandler}
      >
        Delete
      </button>
    </div>
  );

  const Save = (
    <div className="flex ">
      <button
        className="ml-5 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded uppercase"
        onClick={OnSaveHandler}
      >
        Save
      </button>
      <button
        className="ml-5 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded uppercase"
        onClick={OnCancelHandler}
      >
        Cancel
      </button>
    </div>
  );
  return <div>{isEdit.id == item.id && isEdit.edit ? Save : Edit}</div>;
};

export default TodoAction;
