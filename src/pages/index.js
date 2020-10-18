import React, {useSiteMetadata} from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import Layout from "../components/layout";
import SEO from "../components/seo";
import MyImage from '../components/MyImage';
import PostsList from '../components/PostsList';

const Wrapper = styled.div`
background-color: white;
padding: 5% 10% 15% 10%;
margin-top: 0;

@media only screen and (min-width: 780px){
  display: flex;
}
`;

const PostsIndex = styled.div`
  
  @media only screen and (min-width: 780px){
    border-right: 3px lightgrey solid;
    padding-right: 5%;  
  }
`;
const PostWrapper = styled.div`
`;

const Title = styled.h2`
  display: inline-block;
  background-color: white;
  text-align:center;
  width: 100%;
  padding: 1em;
  margin: 0;
  border-bottom: 3px solid lightgrey;
`;

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h2`
  margin-bottom: 20px;
  color: orange;
  &:hover {
    color: #c04210;
  }
`;

const AboutWrapper = styled.div`
  padding: 10%; 
  border-top: 3px lightgrey solid;

  @media only screen and (min-width: 780px){
    border-top: none;
    width: 30%;
    padding: 50px;
    padding-top: 0;
  }
`;



export default (props) => {
  console.log(props, 'PROPS')
  const { totalCount, edges } = props.data.allMarkdownRemark;

  return (  //data comes from the query below
    <Layout>
      <SEO title="From Art to code... My path towards web development and other random thoughts"/>
      <Title>My path towards web development ...and other random thoughts: <span>{totalCount}</span></Title>

      <Wrapper>
        <PostsIndex>
          {
            edges.map(({ node }, i) => (
              <PostWrapper key={i}>
                <BlogLink to={node.fields.slug}>
                  <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
                  {
                    node.frontmatter.featured && (
                      <img
                        key={i}
                        src={node.frontmatter.featured.childImageSharp.fluid.src}
                        alt={node.frontmatter.title}
                      />)
                  }

                </BlogLink>
                <p>{node.excerpt}</p>
              </PostWrapper>
            ))

          }
        </PostsIndex>

        <AboutWrapper>
          <BlogLink to={'/About'}>
            <BlogTitle>ABOUT</BlogTitle>
            <MyImage />
          </BlogLink>
          <PostsList data={edges} />
        </AboutWrapper>



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