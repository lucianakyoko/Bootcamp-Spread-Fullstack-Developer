import { H1 } from "../../../styles/ui";
import activities from '../../../datas/datas.json';
import { 
  TimelineWrapper, 
  TimelineList, 
  TimelineItem, 
  ModuleTitle, 
  ActivityTitle 
} from './style';

export function Timeline() {
  return(
    <TimelineWrapper>
      <H1>Timeline</H1>
      <TimelineList>
        {activities.map(activity => (
          <TimelineItem key={activity.id}>
            <ModuleTitle>{activity.modulo}</ModuleTitle>
            <ActivityTitle>{activity.activity}</ActivityTitle>
          </TimelineItem>
        ))}
      </TimelineList>
    </TimelineWrapper>
  )
}