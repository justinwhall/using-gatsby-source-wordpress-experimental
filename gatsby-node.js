const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // create the homepage
  const { data } = await graphql(`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  const perPage = 10
  const chunkedContentNodes = chunk(data.allWpPost.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, i) => {
      const firstNode = nodesChunk[0]
      const page = i + 1
      const offset = i ? perPage * page : i

      await createPage({
        component: resolve(`./src/templates/index.js`),
        path: page === 1 ? `/blog/` : `/blog/${page}/`,
        context: {
          firstId: firstNode.id,
          page: page,
          offset: offset,
          totalPages: chunkedContentNodes.length - 1,
          perPage,
        },
      })
    })
  )
}
