import { ReactNode } from "react";

export interface TextM {
  fontSize?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  letterSpacing?: string;
  text?: string;
  children?: ReactNode;
}
