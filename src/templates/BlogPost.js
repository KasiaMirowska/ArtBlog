import React, {useSiteMetadata} from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import SEO from "../components/seo";

const Post = styled.div`
  background-color: white;
  padding: 5% 20% 10% 20%;
  margin-top: 0;
  
  @media only screen and (max-width: 480px){
    background-color: white;
    padding: 15px;
    margin-top: 0;
  }
`
const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: orange;
  &:hover {
    color: #c04210;;
  }
`;

export default ({ data, pageContext }) => {

  const post = data.markdownRemark;
  const { previous, next } = pageContext;


  return (
    <Layout>
      <SEO image={post.frontmatter.featured.childImageSharp.fluid.src}/>
      <Post>
        {
          post.frontmatter.featured && (
            <img src={post.frontmatter.featured.childImageSharp.fluid.src} alt='post'/>
          )
        }
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        {previous === false ? null : (
          <div>
            {previous && (
              <BlogLink to={previous.fields.slug}>
                <BlogTitle>
                  PREVIOUS POST: {previous.frontmatter.title}
                </BlogTitle>
              </BlogLink>
            )}
          </div>
        )}
        {next === false ? null : (
          <div>
            {next && (
              <BlogLink to={next.fields.slug}>
                <BlogTitle>
                  NEXT POST: {next.frontmatter.title}
                </BlogTitle>
              </BlogLink>
            )}
          </div>
        )}
      </Post>
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
