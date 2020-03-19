import React from "react"
import {
  Box,
  SimpleGrid,
  Heading,
  FormHelperText,
  Button,
} from "@chakra-ui/core"
import { Link } from "gatsby"
import Container from "../container"

const FeaturedProduct = () => (
  <Box>
    <Container>
      <Box mb={8} textAlign="center">
        <FormHelperText>Featured</FormHelperText>
        <Heading as="h2">LittleBot Invoices</Heading>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
        <Box>
          <img
            src="https://i1.wp.com/littlebot.io/wp-content/uploads/2016/12/littlebot-invoices.png?fit=1024%2C636&amp;ssl=1"
            alt="LittleBot Invoices"
          ></img>
        </Box>
        <Box as="p">
          <Heading as="h3" fontSize={25} mb={2}>
            Get Paid Quickly, Work Efficiently
          </Heading>
          Getting paid should never slow you down. LittleBot Invoices uses
          bionic powers to seamlessly integrate onto your WordPress site so you
          can request and estimate payments without ever leaving your website.
          Create clear and accurate invoices at breakneck speed. Because robots
          are the new unicorns.
          <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={10} mt={5}>
            <Button
              as={Link}
              to="/plugins/littlebot-invoices/"
              variantColor="pink"
            >
              More Info
            </Button>
            <Button as="a" variantColor="pink">
              On WordPress.org
            </Button>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
)

export default FeaturedProduct
