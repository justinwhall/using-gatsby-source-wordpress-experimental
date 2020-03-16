import React from "react"
import { Box } from "@chakra-ui/core"

const Container = props => {
  const styles = {
    paddingTop: 4,
    maxWidth: 1200,
    ...props,
  }

  return (
    <Box margin="0 auto" {...styles}>
      {props.children}
    </Box>
  )
}

export default Container
