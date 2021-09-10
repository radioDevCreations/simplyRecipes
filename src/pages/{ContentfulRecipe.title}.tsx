import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import slugify from "slugify";
import SEO from "../components/SEO";

const RecipeTemplate = (props: any) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = props.data.contentfulRecipe;
  const { tags, instructions, ingredients, tools } = content;
  return (
    <Layout>
      <SEO title={title}/>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag: any, index: number) => {
                  const tagSlug = slugify(tag, { lower: true });
                  return (
                    <Link to={`/tags/${tagSlug}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction: any, index: number) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient: any, index: number) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool: any, index: number) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`;

export default RecipeTemplate;
