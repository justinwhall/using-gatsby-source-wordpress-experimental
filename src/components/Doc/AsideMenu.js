import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"

const products = {
  invoices: "LittleBot Invoices",
  ach: "LittleBot ACH",
}

const Menu = props => {
  const data = useStaticQuery(graphql`
    query AsideQuery {
      allSitePage(filter: { path: { regex: "/docs/" } }) {
        nodes {
          context {
            frontmatter {
              title
            }
          }
          path
        }
      }
    }
  `)

  const menuItems = data.allSitePage.nodes.filter(item =>
    item.path.includes(props.plugin)
  )

  return (
    <Box
      display={{ sm: "none", md: "block" }}
      position="fixed"
      left={0}
      top="40px"
      height="100vh"
      width={200}
      bg="gray.100"
      padding={10}
    >
      <Box as="strong">{products[props.plugin]}</Box>
      {menuItems.map(item => (
        <Box key={item.path} to={item.path} as={Link} display="block">
          {item.context.frontmatter.title}
        </Box>
      ))}
    </Box>
  )
}

export default Menu
