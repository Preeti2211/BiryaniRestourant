import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import '../Style/about.css';
import BhHome from '../Images/bbk-about-bbk-home.jpg';

export default function About() {
    return (
        <Container className="about-container">
            <Box className="about-header">
                <Typography variant="h3">About Us</Typography>
            </Box>
            <Grid container spacing={3} className="about-content">
                <Grid item xs={12} md={6}>
                    <Box className="about-image">
                        <img src={BhHome} alt="Biryani Restaurant" className="about-img" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" className="about-title">Our Story</Typography>
                    <Typography variant="body1" className="about-text">
                        Welcome to our Biryani restaurant! We are passionate about bringing the authentic flavors of Biryani to your plate. Our journey started with a love for traditional recipes and a desire to share the rich culinary heritage of India.
                    </Typography>
                    <Typography variant="body1" className="about-text">
                        Our chefs use the freshest ingredients and time-honored techniques to create a menu that is both delicious and authentic. From the fragrant spices to the tender meats and flavorful rice, every bite of our Biryani is a celebration of taste.
                    </Typography>
                    <Typography variant="body1" className="about-text">
                        Join us for a dining experience that transports you to the heart of India. Whether you're here for a casual meal or a special occasion, we are committed to providing exceptional food and service.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
