import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { parse as qsParse } from 'query-string'

import { Header } from '../components/Header';
import { Layout } from "../components/Layout"

// @ts-ignore
const ArchivesPage = ({ data: { site, posts }, location }) => {
  const [searchText, setSearchText] = useState(
    // @ts-ignore
    (qsParse(location.search).search || '').trim()
  )

  console.log(posts);

  return (
    <Layout>
      <Header />
      <div className="section">
        <div className="container">
          {posts.edges.map((post: any) => (
            <div key={post.node.id} className="box content">
              <p>
                <a href={post.node.fields.slug}>{post.node.frontmatter.title}</a>
              </p>
              <p>{post.node.frontmatter.description}</p>
              <p className="tags">
                {post.node.frontmatter.tags.map((tag: string, index: number) => (
                  <span key={index} className="tag is-primary">{tag}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ArchivesPage

export const archivesPageQuery = graphql`
  query ArchivesQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { layout: { eq: "blog-post" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
            tags
          }
        }
      }
    }
  }
`