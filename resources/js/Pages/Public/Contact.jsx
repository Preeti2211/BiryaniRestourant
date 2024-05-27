import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import contactImage from '../Images/contactImage.png';
import '../Style/contact.css';

const Contact = () => {
  return (
    <Container className="container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={contactImage} alt="Contact" className="image" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <br/><br/>
          <Box className="contactInfo">
            <Box className="contactItem">
              <LocationOn className="icon" />
              <Typography>1234 Street Name, City, State, Zip Code</Typography>
            </Box>
            <Box className="contactItem">
              <Email className="icon" />
              <Typography>contact@example.com</Typography>
            </Box>
            <Box className="contactItem">
              <Phone className="icon" />
              <Typography>(123) 456-7890</Typography>
            </Box>
          </Box>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.156373776572!2d77.37654907460087!3d28.565066687142803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d9e7714c5%3A0x61683761eb3b21db!2sOpportunity%20Hubb%20%7C%20Best%20Placement%20%26%20IT%20Consultant%20in%20India%20*21%20All%20Service%20Provider%20*21!5e0!3m2!1sen!2sin!4v1716791343351!5m2!1sen!2sin"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
