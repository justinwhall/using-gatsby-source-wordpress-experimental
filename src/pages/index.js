import React from "react"
import { Heading, Box, Button } from "@chakra-ui/core"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import FeaturedProduct from "../components/FeaturedProduct"
import AwesomeSupport from "../components/AwesomeSupport"
import LoveWordPress from "../components/LoveWordPress"

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
        fontSize="lg"
        variantColor="pink"
      >
        Checkout LittleBot Invoices
      </Button>
    </StyledBox>
    <FeaturedProduct />
    <AwesomeSupport />
    <LoveWordPress />
  </Layout>
)
