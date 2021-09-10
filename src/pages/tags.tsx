import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import slugify from "slugify";
import SEO from "../components/SEO";

const Tags: FC = (props: any) => {
  const newTags = setupTags(props.data.allContentfulRecipe.nodes);
  return (
    <>
      <Layout>
        <SEO title="tags"/>
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, value] = tag;
              const tagSlug = slugify(text, { lower: true });
              return (
                <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                  <h5>{text}</h5>
                  <p>{value} recipes</p>
                </Link>
              );
            })}
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
