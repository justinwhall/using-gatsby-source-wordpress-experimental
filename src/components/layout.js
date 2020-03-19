import React from "react"
import { Box } from "@chakra-ui/core"
import Menu from "./menu"
import Footer from "./Footer"

const Layout = props => (
  <Box {...props}>
    <Menu />
    {props.children}
    <Footer />
  </Box>
)

export default Layout
