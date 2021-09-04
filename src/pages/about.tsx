import React, { FC } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About: FC = () => {
  return (
    <>
      <Layout>
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
        </main>
      </Layout>
    </>
  );
};

export default About;
