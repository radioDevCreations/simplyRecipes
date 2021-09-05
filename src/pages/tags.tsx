import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";

const Tags: FC = (props: any) => {
  const newTags = setupTags(props.data.allContentfulRecipe.nodes);
  return (
    <>
      <Layout>
        <main className="page">
          <section className="tags-page">
            {newTags.map((tag, index) => {
              const [text, value] = tag;
              return (
                <Link to={`/${text}`} key={index} className="tag">
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
