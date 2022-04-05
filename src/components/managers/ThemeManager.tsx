import { createTheme, ThemeProvider } from "@mui/material";
import { useContext, useMemo } from "react";
import GlobalContext from "../../GlobalContext";

interface ThemeManagerProps {
  children: JSX.Element;
}
export default function ThemeManager({ children }: ThemeManagerProps) {
  const globalContext = useContext(GlobalContext);

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalContext.colorMode,
        },
      }),
    [globalContext.colorMode]
  );
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}
