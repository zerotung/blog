import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { Header } from '../components/Header';
import { Layout } from "../components/Layout"

// @ts-ignore
const IndexPage = () => {
  return (
    <Layout>
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container">
            <title>Home Page</title>
            <h1>
              Congratulations
              <br />
              <span>— you just made a Gatsby site! </span>
              🎉🎉🎉
            </h1>
            <p>
              Edit <code>src/pages/index.tsx</code> to see this page
              update in real-time. 😎
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;
