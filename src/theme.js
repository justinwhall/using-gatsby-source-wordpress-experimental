import { theme as chakraTheme } from "@chakra-ui/core"

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    darkGreen: "#2b3a42",
    grey: "#e3e3e3",
    foo: "#000000",
    orange: "#ff530d",
    primary: "#fff",
  },
}

console.log(theme)

export default theme
