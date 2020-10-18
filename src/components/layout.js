/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * here switched to using hook that uses useStaticQuery
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Header from "./header"
import SEO from "../components/seo";
import "./layout.css"


const Layout = ({ children }) => {

  const { title, image, description, siteUrl, siteLanguage, siteLocale, author } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} siteDescription={description}/>
      <SEO title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        author={author}
      />
      <div
      style={{
        margin: `0 auto`,
        //width: `90%`,
      }}
      >
       
      <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
