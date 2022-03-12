import React from 'react'
import { graphql, Link } from 'gatsby';

import { Header } from '../components/Header';
import { Layout } from "../components/Layout";

export const BlogPostTemplate = ({
  // @ts-ignore
  content,
}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}>
    </div>
  );
};

// @ts-ignore
const BlogPost = ({ data: { site, post }, pageContext }) => {
  const { title, description, date, tags } = post.frontmatter

  return (
    <Layout>
      <div className="hero">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
        <div className='hero-foot'>
          <div className="container">{date}</div>
        </div>
      </div>
      <div className="container">
        <BlogPostTemplate content={post.html} />
      </div>
      <div className="container">
        <p className="tags">
          {tags.map((tag: string, index: number) => (
            <span key={index} className="tag is-primary">{tag}</span>
          ))}
        </p>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 200)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`