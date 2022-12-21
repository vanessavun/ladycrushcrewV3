import React from 'react';
import PageHeader from '../../components/page-header/page-header.component';
import { AboutContainer } from '../about/about-styles';

function Events() {
  return (
    <AboutContainer>
      <PageHeader title="Events" emote="📅" />
      <h2>No events planned.</h2>
    </AboutContainer>
  )
}

export default Events