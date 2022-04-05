import { PaletteMode } from "@mui/material";
import { useState } from "react";

import ThemeManager from "./components/managers/ThemeManager";
import GlobalContext from "./GlobalContext";
import Login from "./pages/Login";

function App() {
  const [colorMode, setcolorMode] = useState<PaletteMode>("light");
  return (
    <GlobalContext.Provider value={{ colorMode, setcolorMode }}>
      <ThemeManager>
        <Login />
      </ThemeManager>
    </GlobalContext.Provider>
  );
}

export default App;
