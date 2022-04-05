import { PaletteMode } from "@mui/material";
import { createContext, Dispatch, SetStateAction } from "react";

interface GlobalContextTypes {
  colorMode: PaletteMode | undefined;
  setcolorMode: Dispatch<SetStateAction<PaletteMode>> | undefined;
}

const GlobalContext = createContext<GlobalContextTypes>({
  colorMode: undefined,
  setcolorMode: undefined,
});

export default GlobalContext;
