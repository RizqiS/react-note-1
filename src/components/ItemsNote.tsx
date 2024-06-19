import { useContext } from "react";
import { NoteContext } from "../store/note-context";
import { ProjectValue, TaskValue } from "../model/data-context";

import NewTask from "./NewTask";
import ItemTask from "./ItemsTask";

export default function ItemNote({ id }: { id: string }) {
  const noteContext = useContext(NoteContext);

  const items = noteContext.selectedItemProjectById(id) as ProjectValue;
  const itemsTask = noteContext.selectedItemTask(id) as TaskValue[];

  return (
    <div className="container mx-auto mt-16 w-2/3">
      <div className="flex justify-between w-1/2">
        <h2 className="font-bold border-b-2 w-full pb-3 mr-3">{items.title}</h2>
      </div>
      <p className="mb-3">
        <small className="font-semibold ">{items.date}</small>
      </p>
      <p className="text-justify w-3/4">{items.description}</p>

      <menu>
        <NewTask />
        <ItemTask item={itemsTask} />
      </menu>
    </div>
  );
}
