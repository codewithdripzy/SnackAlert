import { createContext } from "react";
import type { AlertContextType } from "../interface/provider";

export const AlertContext = createContext<AlertContextType | null>(null);