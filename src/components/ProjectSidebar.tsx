import { useContext } from "react";
import { NoteContext } from "../store/note-context";
import Button from "../UI/Button";

export default function ProjectSidebar() {
  const noteContext = useContext(NoteContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase mb:text-xl text-stone-200">Your project</h2>
      <Button type="button" onClick={noteContext.startProject}>
        + Add A New Project
      </Button>
      <ul>
        {noteContext.stateContext.project!.map((item) => (
          <button
            onClick={noteContext.selectedProjectById.bind(null, item.id)}
            key={item.id}
            className="w-full px-2 py-1 text-left my-1 text-stone-400 rounded-sm hover:text-stone-200 hover:bg-stone-800">
            {item.title}
          </button>
        ))}
      </ul>
    </aside>
  );
}
