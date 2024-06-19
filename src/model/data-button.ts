import { ReactNode } from "react";

export interface PropsButton {
  children: ReactNode;
  onClick?(): void;
  type: "button" | "submit" | "reset";
  color?: string;
}
