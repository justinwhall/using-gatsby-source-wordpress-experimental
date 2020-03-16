import React from "react"
import { Heading, Box } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"

const Product = ({ children }) => {
  return (
    <Layout bg="gray.800" h="100vh" color="white">
      <Container maxWidth={600}>
        <Heading as="h1" color="pink.400">
          Hey It's a product
        </Heading>
        {children}
      </Container>
    </Layout>
  )
}

export default Product
