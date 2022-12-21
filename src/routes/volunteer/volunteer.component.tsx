import React from 'react';
import VolunteerForm from '../../components/volunteer-form/volunteer-form.component';
import { VolunteerContainer } from './volunteer-styles';

function Volunteer() {
  
  return (
    <VolunteerContainer>
      <VolunteerForm />
    </VolunteerContainer>
  );
}

export default Volunteer;
