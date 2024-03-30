//in this file we are creatting all the 3 main functionalities (context, provider,)

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light" /* we can set light theme by default whenever page is render theme is light */,
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

//with the help of this function we don't need to write 2 functions,hook(useContext, ThemeContext) again and again we simply use one function
export default function useTheme() {
  return useContext(ThemeContext);
}
