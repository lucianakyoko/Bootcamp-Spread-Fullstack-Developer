import { getTags } from "../datas/tags";
import { getCategories } from "../datas/categories";

export const getTagColor = (tagName) => {
  const tagColor = getTags().find(tag => tag.id === tagName);
  return tagColor.color;
}

export const getCategoryColor = (categoryName) => {
  const tagColor = getCategories().find(category => category.id === categoryName);
  return tagColor.color;
}