import { PaletteMode } from "@mui/material";
import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import ThemeManager from "./components/managers/ThemeManager";
import GlobalContext from "./GlobalContext";

function App() {
  const [colorMode, setcolorMode] = useState<PaletteMode>("light");
  return (
    <GlobalContext.Provider value={{ colorMode, setcolorMode }}>
      <ThemeManager>
        <LanguageSelector />
      </ThemeManager>
    </GlobalContext.Provider>
  );
}

export default App;
