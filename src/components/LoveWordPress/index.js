import React from "react"
import { Box, Heading, FormHelperText } from "@chakra-ui/core"
import Container from "../container"

const LoveWordPress = () => (
  <Container textAlign="center">
    <Box mb={8}>
      <FormHelperText>Pros at our craft</FormHelperText>
      <Heading as="h3" color="pink.700">
        We ♥ WordPress
      </Heading>
    </Box>
    <Box as="p">
      LittleBot doesn't take no for an answer. Like a good little robot, he
      knows every project is more than just pixels on a screen. It's about a
      quality software product that is fast, intuitive and built to last whether
      it's a website, plugin or API integration.
    </Box>
  </Container>
)

export default LoveWordPress
