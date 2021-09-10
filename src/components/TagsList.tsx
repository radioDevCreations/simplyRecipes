import { Link } from "gatsby";
import React, { FC } from "react";
import setupTags from "../utils/setupTags";
import slugify from "slugify";

const TagsList: FC<any> = (props: any) => {
  const newTags = setupTags(props.recipes);
  return (
    <div className="tag-container">
      <h4>TagsList</h4>
      <div className="tags-list">
        {newTags.map((tag: [string, unknown], index: number) => {
          const [text, value] = tag;
          const tagSlug = slugify(text, { lower: true });
          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
