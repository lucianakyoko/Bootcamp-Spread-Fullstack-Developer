import { getTags } from '../datas/tags';

export const getTagColor = (tagName) => {
  const tagColor = getTags().find(tag => tag.id === tagName);
  return tagColor.color;
}