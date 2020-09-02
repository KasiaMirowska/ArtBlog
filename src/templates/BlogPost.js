import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  const image = data.imageSharp;
  console.log(data);

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* <img src={{image.edges.node.original}} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    },
    # imageSharp{original: {src: { eq: $src}}}
  }
`;
// query {
//   fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400, maxHeight: 250) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }