import { useContext } from "react";
import { TaskValue } from "../model/data-context";
import { NoteContext } from "../store/note-context";
interface Props {
  item: TaskValue[];
}
export default function ItemTask(props: Props) {
  const noteCtx = useContext(NoteContext);

  return (
    <ul className="mt-6">
      {props.item.map((m) => (
        <li className="border-b-2 w-1/2 pb-2 flex justify-between mt-3" key={m.id}>
          <p className="font-semibold">{m.task}</p>
          <button
            className="text-red-500 cursor-pointer"
            onClick={noteCtx.deleteTask.bind(null, m.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
