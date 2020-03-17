import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import {
  FormControl,
  FormLabel,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/core"
import Container from "../container"

const ProductBlock = props => {
  return (
    <Box p={10} fontSize={27} fontWeight="light" {...props}>
      <Container>
        <Box
          as="h2"
          textAlign="center"
          mb={6}
          fontSize={30}
          color="pink.800"
          fontWeight="normal"
        >
          {props.title}
        </Box>
        <SimpleGrid columns={[2, null, 2]} spacing="40px">
          <Box>{props.children}</Box>
          <img src="https://i1.wp.com/littlebot.io/wp-content/uploads/2016/12/invoices.png?fit=986%2C433&ssl=1" />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ProductBlock
