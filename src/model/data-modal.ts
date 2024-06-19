import { ReactNode } from "react";

export interface PropsModal {
  caption: string;
  children: ReactNode;
}

export type CustomShowModal = {
  open(): void;
};
