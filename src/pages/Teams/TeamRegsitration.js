import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Input from '../../components/input';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { showToastTimer } from '../../redux/actions/toast';
import Loader from '../../components/loader/index';

function TeamRegistration() {
  const [representativeName, setRepresentativeName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [totalTeamMembers, setTotalTeamMembers] = useState('');
  const [idCardImage, setIdCardImage] = useState(null);
  const [fakeLoading, setFakeLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false); // Track submission status

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000);
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (representativeName && rollNumber && year && course && totalTeamMembers && idCardImage && !submitting) {
      setSubmitting(true); // Disable submit button
  
      const formData = new FormData();
      formData.append('representativeName', representativeName);
      formData.append('rollNumber', rollNumber);
      formData.append('year', year);
      formData.append('course', course);
      formData.append('totalTeamMembers', totalTeamMembers);
      formData.append('idCardImage', idCardImage);
  
      try {
        const response = await fetch('http://localhost:5000/api/teamregfile', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error('Failed to register team');
        }
  
        // const responseData = await response.json();
        resetForm();
        dispatch(showToastTimer('Team registered successfully', 'success'));
      } catch (error) {
        console.error('Error:', error);
        dispatch(showToastTimer('Error registering team', 'error'));
      } finally {
        setSubmitting(false); // Enable submit button
      }
    }
  };
  

  const resetForm = () => {
    setRepresentativeName('');
    setRollNumber('');
    setYear('');
    setCourse('');
    setTotalTeamMembers('');
    setIdCardImage(null);
  };

  if (fakeLoading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <Grid container spacing={{ lg: 10, xs: 4 }}>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Representative Name"
                placeholder="Representative Name"
                value={representativeName}
                onChange={(e) => setRepresentativeName(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Roll Number"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Year"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Course"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                label="Total Team Members"
                placeholder="Total Team Members"
                value={totalTeamMembers}
                onChange={(e) => setTotalTeamMembers(e.target.value)}
              />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Input
                width="100%"
                type="file"
                label="Upload ID Card Image"
                onChange={(e) => setIdCardImage(e.target.files[0])}
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
