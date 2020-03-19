import React from "react"
import { Box, SimpleGrid, Heading, Button } from "@chakra-ui/core"
import { Link } from "gatsby"
import Container from "../container"

const AwesomeSupport = () => (
  <Box bg="cyan.600" color="white">
    <Container>
      <Box mb={8} textAlign="center">
        <Heading as="h2" fontWeight="light" fontSize={45}>
          <Box as="span" fontWeight="bold">
            Awesome support
          </Box>{" "}
          for our customers by us
        </Heading>
        <Heading as="h3" fontWeight="light" fontSize={30}>
          No outsourcing. All of our products are supported by LittleBot.
        </Heading>
        (🤖 beep beep boop)
      </Box>
      <SimpleGrid
        columns={{ sm: 2, md: 2 }}
        spacing={10}
        maxWidth={500}
        margin="0 auto"
      >
        <Button as={Link} to="/contact" variantColor="white" variant="outline">
          Ask a Question
        </Button>
        <Button as={Link} to="/support" variantColor="white" variant="outline">
          Get Help
        </Button>
      </SimpleGrid>
    </Container>
  </Box>
)

export default AwesomeSupport
