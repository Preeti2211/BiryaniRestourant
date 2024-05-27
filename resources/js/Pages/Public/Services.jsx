import React from 'react';
import { Servic } from '../DataImage';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import '../Style/service.css';


export default function Services(){
    return (
        <Container className="services-container">
            <Box className="services-header">
                <Typography variant="h3">Our Services</Typography>
            </Box>
            <Grid container spacing={4} className="services-content">
                {Servic.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="service-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={service.img}
                                alt={service.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
       
}