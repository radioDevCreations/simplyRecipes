import React, { FC } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const error: FC = () => {
  return (
    <>
      <Layout>
        <SEO title={"page not found"}/>
        <main className="error-page">
          <section>
            <h1>404</h1>
            <h3>page not found</h3>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default error;
