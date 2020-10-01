import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image';


const Header = ({ siteTitle }) => {
  console.log('here in header?')
  return (
    <header
      style={{
        background: `black`,
        //marginBottom: `1.45rem`,
      }}
    >


      <h1 style={{ margin: `0` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `60px`,
          }}
        >
          <Image />
         
          <div style={{ padding: `1.5rem`, marginLeft: `5rem`}}>
          {siteTitle}
          </div>
         
        </Link>
      </h1>
    </header >
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
