import React from "react"
import { Heading, Box, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { SimpleGrid } from "@chakra-ui/core"

const StyledBox = styled(Box)`
  height: 100vh;
`

export default () => (
  <Layout>
    <StyledBox bg="gray.800" color="white" textAlign="center">
      <Heading as="div" fontSize="5rem" fontWeight="normal" pt="40">
        Hello, from LittleBot
      </Heading>
      <Heading as="h1" fontSize="2.4rem" fontWeight="thin">
        We build software & plugins for WordPress
      </Heading>
      <Button
        as={Link}
        to="/plugins/littlebot-invoices/"
        mt="10"
        // bg="orange"
        fontSize="lg"
        variantColor="pink"
      >
        Checkout LittleBot Invoices
      </Button>
    </StyledBox>
    <Box className="featured-product">
      <sub>featured</sub>
      <h2>LittleBot Invoices</h2>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Box>
  </Layout>
)
