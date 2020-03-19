/* eslint-disable import/prefer-default-export */
import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import littleBotTheme from "./src/theme"
import { Global, css } from "@emotion/core"

const GlobalStyles = css`
  p {
    font-size: 25px;
    font-weight: 300;
  }
`
export const Root = ({ element }, themeOptions) => {
  return (
    <ThemeProvider theme={littleBotTheme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      {element}
    </ThemeProvider>
  )
}
