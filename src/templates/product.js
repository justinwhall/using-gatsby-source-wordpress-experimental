import React from "react"
import { Link } from "gatsby"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import { SimpleGrid, Button, Box } from "@chakra-ui/core"

const Product = props => {
  const { docs, download, intro, title } = props.pageContext.frontmatter

  return (
    <Layout>
      <Container maxWidth={1200} textAlign="center" mt={10}>
        <Heading as="h1" color="pink.500" fontSize="5xl" mb={3}>
          {title}
        </Heading>
        <Box fontSize={25}>{intro}</Box>
      </Container>
      <Container maxWidth={450}>
        <SimpleGrid minChildWidth="180px" spacing="20px">
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
