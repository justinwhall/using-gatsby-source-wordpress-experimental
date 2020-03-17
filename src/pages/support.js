import React from "react"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import SupportForm from "../components/supportForm"

const MyForm = () => {
  return (
    <Layout bg="gray.800" h="100vh" color="white">
      <Container maxWidth={600}>
        <Heading as="h1" color="pink.400">
          Hey, we're here to help
        </Heading>
        <SupportForm />
      </Container>
    </Layout>
  )
}

export default MyForm
