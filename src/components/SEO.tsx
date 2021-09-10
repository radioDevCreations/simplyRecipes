import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
 title: string;
 description?: string;
}

const query = graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
`;

const SEO: FC<SEOProps> = (props: any) => {
  const { title, description } = props;
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;

  const capitalizeFirstLetter = (text: string): string => 
  text.split(' ')
  .map((item: string) => [item[0].toUpperCase(), item.slice(1)].join(''))
  .join(' ');

  return (
   <Helmet 
   htmlAttributes={{lang: 'en'}}
   title={`${capitalizeFirstLetter(title)} | ${site.siteMetadata.title}`}
   meta={[{
     name: `description`,
     content: description
  }]}
   >
   </Helmet> 
  );
};

export default SEO;
