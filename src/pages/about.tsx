import React, { FC } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About: FC<any> = (props: any) => {
  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
  } = props;
  return (
    <>
      <Layout>
        <SEO title={"about"}/>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>I,m baby coloring book poke taxidermy</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, aliquam nisi autem voluptatibus accusantium, error
                molestias sunt debitis eos soluta animi commodi corrupti?
              </p>
              <p>
                Deserunt, dolorum corrupti! Ea tenetur iusto rem rerum officia
                doloremque eaque repellat aliquam earum.
              </p>
              <Link to="/contact" className="btn">
                contact
              </Link>
            </article>
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="Person Pouring Salt in Bowl"
              className="about-img"
              placeholder="blurred"
            />
          </section>
          <section className="featured-recipes">
            <h5>Look at this Awesomesouce!</h5>
            <RecipesList recipes={recipes} />
          </section>
        </main>
      </Layout>
    </>
  );
};

//export!
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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
      totalCount
    }
  }
`;

export default About;
