import { getTags } from '../datas/tags';
import { getCategories } from '../datas/categories';

export const getTagLabel = (tagName) => {
  const tag = getTags().find(item => item.id === tagName);
  return tag.label;
}

export const getCategoryLabel = (categoryName) => {
  const category = getCategories().find(item => item.id === categoryName);
  return category.label;
}