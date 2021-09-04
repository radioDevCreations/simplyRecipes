import React, { FC } from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllRecipes: FC = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);
  console.log(recipes);
  return (
    <div>
      <h4>AllRecipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default AllRecipes;
