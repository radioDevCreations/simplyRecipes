import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";


const TagTemplate = (props: any) => {
  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
  } = props;
  const { pageContext } = props;
  return (
    <Layout>
      <SEO title={pageContext.tag}/>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  );
};


export const query = graphql`
query GetRecipeByTag($tag: String) {
  allContentfulRecipe(
    filter: {content: {tags: {eq: $tag}}}
    sort: {order: ASC, fields: title}
  ) {
    nodes {
      title
      id
      cookTime
      prepTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
    totalCount
  }
}
`;

export default TagTemplate;
