import React, { FC } from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Recipes: FC = () => {
  return (
    <>
      <Layout>
        <SEO title={"recipes"}/>
        <main className="page">
          <AllRecipes />
        </main>
      </Layout>
    </>
  );
};

export default Recipes;
