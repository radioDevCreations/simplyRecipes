import React, { FC } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "slugify";

interface RecipesListProps {
  recipes?: any;
}

const RecipesList: FC<RecipesListProps> = (
  props: RecipesListProps = { recipes: [] }
) => {
  const { recipes } = props;
  return (
    <div className="recipes-list">
      {recipes.map((recipe: any) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={image.gatsbyImageData}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
