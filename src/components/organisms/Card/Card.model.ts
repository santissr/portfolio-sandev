import { ReactNode } from "react";

export interface CardM {
  title: string;
  text?: string;
  tech?: ReactNode;
  urlImage?: string;
  viewGitHub: string;
  viewServer: string;
}
