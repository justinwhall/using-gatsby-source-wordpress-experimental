import React from "react"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Container from "../components/container"
import AsideMenu from "../components/Doc/AsideMenu"

const Doc = props => {
  const { title } = props.pageContext.frontmatter
  return (
    <Layout>
      <AsideMenu plugin={props.plugin} />
      <Container maxWidth={1200} mt={10} paddingLeft={{ sm: 5, md: "220px" }}>
        <Heading as="h1" color="pink.500" fontSize="5xl" mb={3}>
          {title}
        </Heading>
        {props.children}
      </Container>
    </Layout>
  )
}

export default Doc
