import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"


export default ({ data, pageContext }) => {
  console.log(data, '////', pageContext)
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  // const { mdx } = data
  //   const title = mdx.frontmatter.title
  //   const timeToRead = mdx.timeToRead
  //   const relativeDate = mdx.frontmatter.date

  return (
    <Layout>
      <div>
        <img src={post.frontmatter.featured.childImageSharp.fluid.src}/>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {previous === false ? null : (
        <div>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>PREVIOUS POST: {previous.frontmatter.title}</p>
            </Link>
          )}
        </div>
      )}
        {next === false ? null : (
        <div>
          {next && (
            <Link to={next.fields.slug}>
              <p>NEXT POST: {next.frontmatter.title}</p>
            </Link>
          )}
        </div>
      )}

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        featured {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
