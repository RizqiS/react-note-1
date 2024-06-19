import React from "react";
import ReactDOM from "react-dom/client";
import Note from "./Note.tsx";
import "./index.css";
import NoteContextProvider from "./store/note-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NoteContextProvider>
      <Note />
    </NoteContextProvider>
  </React.StrictMode>
);
