import React from "react";
import { Reset } from "styled-reset";
import Layout from "../components/Layout";

const error = () => {
  return (
    <>
      <Reset />
      <Layout>
        <h1>error 404</h1>
      </Layout>
    </>
  );
};

export default error;
