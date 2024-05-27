import React from 'react';
import BhHome from '../Images/bbk-about-bbk-home.jpg';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { AllMenu } from '../DataImage';


export default function Menus(){
    return (
       <>
             <Box component="main" sx={{ background: "whitesmoke" }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <img src={BhHome} style={{ height: "450px", width: "100%", boxSizing: "cover" }} />
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{ background: "white", borderBottom: "2px yellow", marginTop: "20px" }}>
                            <Box style={{ width:'90%',marginLeft:"5%" ,padding:"20px"}}>
                            <Typography variant='h4' style={{ fontWeight: "bold", marginBottom: '25px', }}>Our Menu</Typography>
                                <Grid container spacing={3}>
                                    {AllMenu.map((item) => (
                                        <Grid item xs={6}>
                                            <Card>
                                                <CardActionArea>
                                                    <CardMedia
                                                        sx={{ height: "250px", boxSizing: "100%" }}
                                                        component={"img"}
                                                        src={item.img}
                                                    />
                                                    <CardContent>
                                                        <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: "bold" }}>{item.heading}</Typography>
                                                        <Typography variant="p">{item.info}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12} style={{ textAlign:"center" }}>
                                        <Button variant='contained' className='btn' style={{ background:"goldenrod",height:"50px",margin:"auto",fontWeight:"bold",fontSize:"20px" }}>View More</Button>
                                    </Grid>

                            </Grid>
                           </Box>
                    </Grid>
            </Box>
       </>
    );
}