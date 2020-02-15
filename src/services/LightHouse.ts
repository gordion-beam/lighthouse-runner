export const parseScores = (categories: any) => {
  const result = {};
  Object.keys(categories).forEach((categoryKey: any) => {
    const category = categories[categoryKey]
    result[categoryKey] = category.score;
  });
  return result;
};
