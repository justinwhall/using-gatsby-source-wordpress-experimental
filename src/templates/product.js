import React from "react"
import { Link } from "gatsby"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import { SimpleGrid, Button, Box } from "@chakra-ui/core"
import AwesomeSupport from "../components/AwesomeSupport"

const Product = props => {
  const { intro, title } = props.pageContext.frontmatter

  return (
    <Layout>
      <Container maxWidth={1200} textAlign="center" mt={10}>
        <Heading as="h1" color="pink.500" fontSize="5xl" mb={3}>
          {title}
        </Heading>
        <Box fontSize={25}>{intro}</Box>
        <SimpleGrid
          minChildWidth="180px"
          spacing="20px"
          maxWidth={400}
          margin="0 auto"
          mt={5}
        >
          <Button
            as={Link}
            to="/plugins/littlebot-invoices/"
            variantColor="pink"
          >
            Download
          </Button>
          <Button
            as={Link}
            to="/plugins/littlebot-invoices/"
            variantColor="pink"
          >
            Documentation
          </Button>
        </SimpleGrid>
      </Container>
      {props.children}
      <AwesomeSupport />
    </Layout>
  )
}

export default Product

export const query = graphql`
  query MdxExports {
    allMdx {
      nodes {
        frontmatter {
          docs
          download
          intro
          title
        }
      }
    }
  }
`
