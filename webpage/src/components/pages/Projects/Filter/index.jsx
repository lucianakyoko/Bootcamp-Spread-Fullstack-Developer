import React, { useState } from 'react';
import { getTags } from '../../../datas/tags';

import { TagWrapper ,TagItem } from './style'

const Filters = ({ filter, setFilter }) => {
  const tags = getTags();
  const [active, setActive] = useState(false);

  function selectFilter(option) {
    setFilter(option.id);
    console.log(option)
  }


  return (
    <div>
      <h3>Filtrar por:</h3>

      <TagWrapper>
        {tags.map(tag => (
          <TagItem 
            key={tag.id} 
            color={tag.color}
            onClick={() => {
              selectFilter(tag.id);
            }}
            
          >
            {tag.label}
          </TagItem>
        ))}
      </TagWrapper>
    </div>
  )
}

export default Filters