import React from "react"
import { Box, SimpleGrid } from "@chakra-ui/core"
import { Link } from "gatsby"
import Container from "../container"

const Footer = () => (
  <Box as="footer" bg="gray.700" color="pink.200" pt={4} pb={4}>
    <Container>
      <SimpleGrid columns={{ sm: 1, md: 5 }}>
        <Box as={Link} to="/about/">
          About
        </Box>
        <Box as={Link} to="/contact/">
          Contact
        </Box>
        <Box as={Link} to="/support/">
          Support
        </Box>
        <Box as={Link} to="/make-a-donation/">
          Make Donation
        </Box>
        <Box>© LittleBot 2020</Box>
      </SimpleGrid>
    </Container>
  </Box>
)

export default Footer
