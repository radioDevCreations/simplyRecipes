const setupTags = (recipes: any) => {
  const allTags: any = {};
  recipes.forEach((recipe: any) => {
    recipe.content.tags.forEach((tag: string) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
  return newTags;
};

export default setupTags;
