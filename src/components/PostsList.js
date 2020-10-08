import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components';

const BlogLink = styled(Link)`
  text-decoration: none;
  color: grey;
  &:hover {
    color: #c04210;
  }
  border-bottom: 1px solid grey;
`;

const Text = styled.div`
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const Title = styled.h2`
margin: 50% 0 5px 0;
color: orange;

//   background-color: white;
//   text-align:center;
//   width: 100%;
//   padding: 1em;
//   margin: 0;
`;

const PostsList = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { published: { eq: true }}}
      ) {
          totalCount,
          edges {
              node {
              fields {
              slug
          }
          frontmatter {
            date(formatString: "MM/DD/YY")
            title
          }
        }
      }
    }
  }
`)
  console.log(data,)
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Title>POSTS: </Title>
      {edges.map(({ node }, index) => (
        <BlogLink to={node.fields.slug} key={index}>
          <Text>{node.frontmatter.date} {node.frontmatter.title}</Text>
        </BlogLink>
      ))}

    </div>
  )
}

export default PostsList;