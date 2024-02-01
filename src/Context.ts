import { createContext } from "react";
import { Components, TransformedView } from "./types";

export const TreeContext = createContext<TransformedView[]>([]);

export const ComponentsContext = createContext<Components>({});
