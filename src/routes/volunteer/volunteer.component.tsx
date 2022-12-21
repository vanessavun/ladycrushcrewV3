import React from 'react';
import PageHeader from '../../components/page-header/page-header.component';
import VolunteerForm from '../../components/volunteer-form/volunteer-form.component';
import { VolunteerContainer } from './volunteer-styles';

function Volunteer() {
  
  return (
    <VolunteerContainer>
      <PageHeader title="Volunteer Sign Up" emote="📑" />
      <VolunteerForm />
    </VolunteerContainer>
  );
}

export default Volunteer;
