import { useContext } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import { NoteContext } from "./store/note-context";
import ProjectNotSelected from "./components/ProjectNotSelected";
import NewNote from "./components/NewNote";
import ItemNote from "./components/ItemsNote";
export default function () {
  const noteContext = useContext(NoteContext);

  let content;
  if (noteContext.stateContext.selectedProjectId === null) {
    content = <NewNote />;
  } else if (noteContext.stateContext.selectedProjectId === undefined) {
    content = <ProjectNotSelected />;
  } else if (typeof noteContext.stateContext.selectedProjectId === "string") {
    const { selectedProjectId } = noteContext.stateContext;
    content = <ItemNote id={selectedProjectId} />;
  }

  return (
    <div className="h-screen pt-8 flex gap-8">
      <ProjectSidebar />
      {content}
    </div>
  );
}
