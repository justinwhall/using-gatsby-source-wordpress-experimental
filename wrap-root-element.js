/* eslint-disable import/prefer-default-export */
import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import littleBotTheme from "./src/theme"

export const Root = ({ element }, themeOptions) => {
  return (
    <ThemeProvider theme={littleBotTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  )
}
