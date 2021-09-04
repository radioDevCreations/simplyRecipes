import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/radioDevCreations/simplyRecipes/">
          SimplyRecipes
        </a>
        . Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
};

export default Footer;
