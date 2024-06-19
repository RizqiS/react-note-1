import { useRef, useContext, useState } from "react";
import Button from "../UI/Button";
import { NoteContext } from "../store/note-context";
export default function NewTask() {
  const taskRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState<string>("");

  const noteCtx = useContext(NoteContext);
  const handlerSubmitTask = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (taskRef.current?.value != "" && taskRef.current?.value.length !== 0) {
      noteCtx.saveTask(taskRef.current?.value!);
      setTask("");
    }
  };

  return (
    <div className="mt-5">
      <form className="flex items-center" onSubmit={handlerSubmitTask}>
        <div className="w-1/2 mr-3">
          <label htmlFor="">New Task</label>
          <input
            ref={taskRef}
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            className="border-2 rounded-md w-full py-2 px-1 border-black mt-3  focus:outline-none"
          />
        </div>
        <div className="mt-9">
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </div>
  );
}
