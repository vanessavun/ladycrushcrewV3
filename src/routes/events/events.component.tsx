import React from 'react';
import PageHeader from '../../components/page-header/page-header.component';
import Footer from '../../components/footer/footer.component';
import { EventsContainer } from './events-styles';

function Events() {
  return (
    <EventsContainer>
      <PageHeader title="Events" emote="📅" />
      <h2>No events planned.</h2>
      <Footer />
    </EventsContainer>
  )
}

export default Events