import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogLink = styled(Link)`
  text-decoration: none,
`;
const BlogTitle  = styled.h2`
  margin-bottom: 20px;
  color: orange;
`

export default (props) => {
  console.log(props.data.allMarkdownRemark)
  return (  //data comes from the query below
    <Layout>
      <SEO title="Home" />
      <div>
        <h2>Kasia's thoughts: <span>{props.data.allMarkdownRemark.totalCount}</span></h2>
        
        {
          props.data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.excerpt}</p>
            </div>
          ))
        }
      </div>

    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      totalCount,
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt,
          fields {
            slug
          }
        }
      }
    }
  }
`