import { getTags } from '../../../datas/tags';

import {
  FilterContainer,
  TagWrapper,
  TagItem
} from './style';

export function Filter() {
  const tags = getTags();

  return(
    <FilterContainer>
      <p>Filtrar por:</p>

      <TagWrapper>
        {tags.map(tag => (
          <TagItem 
            key={tag.id}
            color={tag.color}
          >
            {tag.label}
          </TagItem>
        ))}
      </TagWrapper>
    </FilterContainer>
  )
}