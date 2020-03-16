import React from "react"
import { Box } from "@chakra-ui/core"
import Menu from "./menu"

const Layout = props => (
  <Box {...props}>
    <Menu />
    {props.children}
  </Box>
)

export default Layout
