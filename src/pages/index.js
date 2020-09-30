import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image"
import Image from '../components/image';

const Wrapper = styled.div`
background-color: white;
padding: 30px;
margin-top: 0;
`;
const PostWrapper = styled.div``;

const Title = styled.h2`
  display: inline-block;
`
const BlogLink = styled(Link)`
  text-decoration: none,
`;
const BlogTitle = styled.h2`
  margin-bottom: 20px;
  color: orange;
  &:hover {
    color: #1dcaff;
  }
`

export default (props) => {
  console.log(props, 'PROPS')
  const { totalCount, edges } = props.data.allMarkdownRemark;

  return (  //data comes from the query below
    <Layout>
      <SEO title="Home" />
      {/* <Dump data={props} /> */}
      <Wrapper>
        <Title>How I became a Web Developer, posts: <span>{totalCount}</span></Title>

        {
          edges.map(({ node }, i) => {
            console.log(node, 'NODE')
            return (
            <PostWrapper key={i}>
              <BlogLink to={node.fields.slug}>
                {
                  node.frontmatter.featured && (
                    <img
                      key={i}
                      //path={node.frontmatter.featured.childImageSharp.fluid.originalName}
                      src={node.frontmatter.featured.childImageSharp.fluid.src}
                      alt={node.frontmatter.title}
                    />)
                }
                <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
              </BlogLink>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </PostWrapper>
            );
        })
      }
      </Wrapper>
      
    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }}}
    ) {
      totalCount,
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY MMMM Do")
            published
            featured {
              childImageSharp {
                fluid(maxWidth: 750) {
                  src
                  originalName
                }
              }
          }
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