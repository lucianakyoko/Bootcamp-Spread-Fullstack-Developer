import { useState } from 'react';
import { H1 } from '../../../styles/ui';
import { 
  TimelineWrapper,
  BootcampListWrapper,
  BootcampItemWrapper,
  BootcampItemContent,
  BootcampModuleTitle,
  BootcampActivityTitle,
  ShowMoreBtn
} from './style';

export function Timeline({ bootcamps }) {
  const [loadMore, setLoadMore] = useState(3);
  const loadMoreItems = () => setLoadMore(loadMore + 3);

  return (
    <TimelineWrapper>
      <H1>Timeline:</H1>
      <BootcampListWrapper>
        {[...bootcamps].reverse().slice(0, loadMore).map(item => (
        <BootcampItemWrapper key={item.id}>
          <BootcampItemContent>
            <BootcampModuleTitle>{item.modulo}</BootcampModuleTitle>
            <BootcampActivityTitle>{item.activity}</BootcampActivityTitle>
          </BootcampItemContent>
        </BootcampItemWrapper>

        ))}
      </BootcampListWrapper>

      <ShowMoreBtn onClick={loadMoreItems}>carregar mais</ShowMoreBtn>
    </TimelineWrapper>

  );
}