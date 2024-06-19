import { useContext } from "react";
import Button from "../UI/Button";
import Logo from "../assets/logo.png";
import { NoteContext } from "../store/note-context";
export default function ProjectNotSelected() {
  const noteContext = useContext(NoteContext);

  return (
    <div className="mt-24 text-center w-2/3">
      <img src={Logo} alt="no project images" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="mb-4 text-stone-400">Select a Project or create a new Project</p>
      <p className="mt-8">
        <Button type="button" onClick={noteContext.startProject}>
          Create New Project
        </Button>
      </p>
    </div>
  );
}
