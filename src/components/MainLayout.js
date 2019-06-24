import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../assets/scss/main.scss'

import Header from './Header'

const MainLayout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query MainLayout {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link rel="canonical" href="https://hubbard.dev/" />
        <link rel="icon" href="src/favicon.ico" type="image/x-icon" />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description}></meta>
        <meta name="author" content={site.siteMetadata.author}></meta>
      </Helmet>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
