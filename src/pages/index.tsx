import React, { FC } from "react";
import Layout from "../components/Layout";
import { Reset } from "styled-reset";

const Home: FC = () => {
  return (
    <>
      <Reset />
      <Layout>
        <main>Hello in Typescript Gatsby!</main>
      </Layout>
    </>
  );
};

export default Home;
