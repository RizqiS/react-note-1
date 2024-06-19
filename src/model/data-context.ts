export type ProjectValue = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type TaskValue = {
  id: string;
  selectedId: string;
  task: string;
};

export type StateApp = {
  selectedProjectId: undefined | null | string;
  project: ProjectValue[];
  task: TaskValue[];
};

export interface NoteContextType {
  stateContext: StateApp;
  startProject(): void;
  cancelProject(): void;
  saveProject(data: ProjectValue): void;
  selectedProjectById(id: string): void;
  selectedItemProjectById(id: string): void | ProjectValue;
  selectedItemTask(id: string): void | TaskValue[];
  deleteProject(id: string): void;
  saveTask(taskvalue: string): void;
  deleteTask(idTask: string): void;
}
