import React from "react";
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';
import MyImage from '../components/MyImage';



const Title = styled.h2`
  background-color: white;
  text-align:center;
  width: 100%;
  padding: 1em;
  margin: 0;
`;

const Wrapper = styled.div`
background-color: white;
padding: 0% 10% 15% 10%;
margin-top: 0;
margin: 0 auto;
`;
const ImgWrapper = styled.div`
  width: 30%;
  padding: 40px;
  padding-top: 0;
  margin: 0 auto;
`;

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Title>About</Title>
      <Wrapper>
        <ImgWrapper>
          <MyImage />
        </ImgWrapper>
        <p>I was born in Poland, and came to USA in 2003 to persue a career as an Artist and Desinger. After gaining certificate of Certified Faux Finish Specialist I started my own buisness providing specialty decorative services in Boston and New England. The following 15 years I spent working with Interior Designers and high end clients on projects raging from hand-decorated, and restored furniture to commercial murals. I wore many hats...Business ownership taught me many skills like: accounting, marketing, Adobe Illustrator and Photoshop to name the few. In 2018 I decided to transition into web development and started teaching myself coding using free available online resources. In 2019 I enrolled in Thinkful; a rigorous and structured full-time programming bootcamp where I worked under the guidance of senior software engineers following industry best practices.
        <br/>  
        <br/>  
        I'm a determined, self-starter who takes ownership of her work and strives to build scalable, well designed applications. I developed dynamic, interactive applications using React, React Hooks, Node, Express with Restful API and SQL database. I also bring to the table 15 years of experience running my own business that gave me an unique insight into the daily grind of delivering and meeting client's expectations, combined with extensive art and visual design knowledge . Visit: https://www.kasiamirowska.com/ to see more of my projects</p>
      </Wrapper>
    </Layout>
  )
}
export default About;