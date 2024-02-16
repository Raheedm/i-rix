import React, { useEffect, useState } from 'react';
import { useInputState } from '../../hooks/useInputState';
import { Container, Grid } from '@mui/material';
import Input from '../../components/input';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { showToastTimer } from '../../redux/actions/toast';
import Loader from '../../components/loader/index';

function TeamRegistration() {
  // States for storing team registration form data
  const [representativeName, handleRepresentativeNameChange, resetRepresentativeName] = useInputState('');
  const [rollNumber, handleRollNumberChange, resetRollNumber] = useInputState('');
  const [year, handleYearChange, resetYear] = useInputState('');
  const [course, handleCourseChange, resetCourse] = useInputState('');
  const [totalTeamMembers, handleTotalTeamMembersChange, resetTotalTeamMembers] = useInputState('');
  const [fakeLoading, setFakeLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000);
  }, []);

  // Team registration form submit handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (representativeName && rollNumber && year && course && totalTeamMembers) {
      const teamData = {
        representativeName,
        rollNumber,
        year,
        course,
        totalTeamMembers,
      };

    
      const response = await fetch('http://localhost:5000/api/teamregfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      const responseData = await response.json();
      if (response.ok) {
        resetForm(); // Reset form fields on successful registration
        dispatch(showToastTimer('Team registered successfully', 'success'));
      } else {
        dispatch(showToastTimer('Error registering team', 'error'));
      }
    }
  };

  const resetForm = () => {
    resetRepresentativeName();
    resetRollNumber();
    resetYear();
    resetCourse();
    resetTotalTeamMembers();
  };

  if (fakeLoading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={{ lg: 10, xs: 4 }}>
            {/* Input fields for team registration */}
            {/* Add more fields as needed */}
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Representative Name"
                placeholder="Representative Name"
                value={representativeName}
                onChange={(e) => handleRepresentativeNameChange(e)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Roll Number"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => handleRollNumberChange(e)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Year"
                placeholder="Year"
                value={year}
                onChange={(e) => handleYearChange(e)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Course"
                placeholder="Course"
                value={course}
                onChange={(e) => handleCourseChange(e)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Total Team Members"
                placeholder="Total Team Members"
                value={totalTeamMembers}
                onChange={(e) => handleTotalTeamMembersChange(e)}
              />
            </Grid>
          </Grid>
          <div
            style={{
              margin: '3.5rem 0 1.8rem 0',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button type="submit">Register Team</Button>
          </div>
        </form>
      </Container>
    );
  }
}

export default TeamRegistration;
