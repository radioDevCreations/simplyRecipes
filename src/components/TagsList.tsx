import { Link } from "gatsby";
import React, { FC } from "react";
import setupTags from "../utils/setupTags";

const TagsList: FC<any> = (props: any) => {
  const newTags = setupTags(props.recipes);
  return (
    <div className="tag-container">
      <h4>TagsList</h4>
      <div className="tags-list">
        {newTags.map((tag: [string, unknown], index: number) => {
          const [text, value] = tag;
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
