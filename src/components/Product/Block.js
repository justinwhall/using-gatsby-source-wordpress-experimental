import React from "react"
import { SimpleGrid, Heading, Box } from "@chakra-ui/core"
import Container from "../container"

const ProductBlock = props => {
  return (
    <Box p={10} fontSize={27} fontWeight="light" {...props}>
      <Container>
        <Heading as="h2" textAlign="center" mb={6} color="pink.700">
          {props.title}
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>{props.children}</Box>
          <img alt="product" src={props.img} />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ProductBlock
