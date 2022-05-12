import { getTags } from '../datas/tags';

export const getTagLabel = (tagName) => {
  const tag = getTags().find(item => item.id === tagName);
  return tag.label;
}