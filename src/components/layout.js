import React from "react"
// import { Box, Grid } from "@chakra-ui/core"
import Menu from "./menu"

const Layout = ({ children }) => (
  <div>
    <Menu />
    {children}
  </div>
)

export default Layout
