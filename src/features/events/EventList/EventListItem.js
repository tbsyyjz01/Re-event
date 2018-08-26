import React, { Component } from 'react';
import {Segment, Item,Icon,List,Button,Label}from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import {Link} from 'react-router-dom'
import format from 'date-fns/format'
import { objectToArray} from '../../../app/common/util/helpers'

class EventListItem extends Component {
  render() {
    const event = this.props.event;
    //const edit = this.props.edit;

    //console.log(objectToArray(event.attendees))
    //const deleteEvent = this.props.delete
    return (
      <div>
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                      <Item.Content>
                        <Item.Header as={Link} to={`/event/${event.id}`}>{event.title}</Item.Header>
                        <Item.Description>
                          Hosted by <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
                        </Item.Description>
                        {event.cancelled &&
                          <Label style={{top:'-40px'}} ribbon='right' color='red' content='This event has been cancelled'/>
                        }
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {format(event.date.toDate(),'dddd Do MMMM')} at{" "} {format(event.date.toDate(), 'HH:mm')} |
                    <Icon name="marker" /> {event.venue}
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                  {event.attendees && objectToArray(event.attendees).map((attendee)=>(<EventListAttendee key={attendee.id}  attendee={attendee}/>))}
                  </List>
                </Segment>
                <Segment clearing>
                <span>{event.description}</span>
                  <Button  as={Link} to={`event/${event.id}`} color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>
      </div>
    )
  }
}


export default EventListItem ;