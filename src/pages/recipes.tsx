import React, { FC } from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";

const Recipes: FC = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <AllRecipes />
        </main>
      </Layout>
    </>
  );
};

export default Recipes;
