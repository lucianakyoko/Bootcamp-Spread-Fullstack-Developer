import { getCategories } from '../../../datas/categories';

import {
  FilterContainer,
  FilterTypeWrapper,
  FilterWrapper,
  FilterItem
} from './style';


export function Filter({ setTagFilter, setCategoryfilter}) {
  const categories = getCategories();

  const selectCategoryFilter = option => {
    console.log('selecionado: ' + option)
    return setCategoryfilter(option);
  }

  return(
    <FilterContainer>
      <p>Filtrar por:</p>
      <FilterTypeWrapper>
        <p>Categorias:</p>
        <FilterWrapper>
          {categories.map(category => (
          <FilterItem key={category.id} color={category.color}>
            <button type='button' onClick={() => selectCategoryFilter(category.id)} >
              {category.label}
            </button>
          </FilterItem>

          ))}
        </FilterWrapper>
      </FilterTypeWrapper>
    </FilterContainer>
  )
}