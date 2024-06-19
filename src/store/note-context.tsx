import { createContext, useState } from "react";
import { NoteContextType, ProjectValue, StateApp, TaskValue } from "../model/data-context";

export const NoteContext = createContext<NoteContextType>({
  stateContext: {
    selectedProjectId: undefined,
    project: [],
    task: [],
  },
  startProject: () => {},
  cancelProject: () => {},
  saveProject: (data: ProjectValue) => {},
  selectedProjectById: (selectId: string) => {},
  selectedItemProjectById: (id: string): void | ProjectValue => {},
  selectedItemTask: (id: string): void | TaskValue[] => {},
  deleteProject: (deleteId: string) => {},
  saveTask: (taskvalue: string) => {},
  deleteTask: (idTask: string) => {},
});

interface Props {
  children: React.ReactNode;
}
export default function NoteContextProvider({ children }: Props) {
  const [stateApp, setStateApp] = useState<StateApp>({
    selectedProjectId: undefined,
    project: [],
    task: [],
  });

  const handlerStartProject = (): void => {
    setStateApp((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handlerCancelProject = (): void => {
    setStateApp((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handlerSaveProject = (data: ProjectValue): void => {
    setStateApp((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      project: prevState.project.concat(data),
    }));
  };

  const handlerSelectedProjectById = (selectId: string): void => {
    setStateApp((prevState) => ({
      ...prevState,
      selectedProjectId: selectId,
    }));
  };

  const handlerSelectedItemProjectById = (id: string): ProjectValue => {
    return stateApp.project.find((f) => f.id === id) as ProjectValue;
  };

  const handlerSelectedItemTask = (id: string): TaskValue[] => {
    return stateApp.task.filter((f) => f.selectedId === id) as TaskValue[];
  };

  const handlerDeleteProject = (deleteId: string): void => {
    const newProject = stateApp.project.filter((f) => f.id !== deleteId);
    setStateApp((prevState) => ({
      ...prevState,
      project: newProject,
    }));
  };

  const handlerSaveTask = (taskvalue: string): void => {
    const taskObject: TaskValue = {
      id: Math.random().toString(),
      selectedId: typeof stateApp.selectedProjectId === "string" ? stateApp.selectedProjectId : "",
      task: taskvalue,
    };

    setStateApp((prevState) => ({
      ...prevState,
      task: prevState.task.concat(taskObject),
    }));
  };

  const handlerDeleteTask = (idTask: string): void => {
    const newTask = stateApp.task.filter((f) => f.id !== idTask);
    setStateApp((prevState) => ({
      ...prevState,
      task: newTask,
    }));
  };

  const values = {
    stateContext: stateApp,
    startProject: handlerStartProject,
    cancelProject: handlerCancelProject,
    saveProject: handlerSaveProject,
    selectedProjectById: handlerSelectedProjectById,
    selectedItemProjectById: handlerSelectedItemProjectById,
    selectedItemTask: handlerSelectedItemTask,
    deleteProject: handlerDeleteProject,
    saveTask: handlerSaveTask,
    deleteTask: handlerDeleteTask,
  };

  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>;
}
