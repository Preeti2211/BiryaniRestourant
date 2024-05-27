import React from 'react';
import Header from '../../Components/GeneralLayout/Header';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import FirstImage from '../Images/firstImage.jpg';
import Shop from '../Images/Shop-1.png';
import Like from '../Images/Like-1.png';
import Handi from '../Images/Handi-1.png';
import Customer from '../Images/customer-1.png';
import { IconImage, Media, Menu } from '../DataImage';
import BhHome from '../Images/bbk-about-bbk-home.jpg';
import Footer from '../../Components/GeneralLayout/Footer';



export default function Home() {
    return (
        <React.Fragment>
            <Box component="main" sx={{ background: "whitesmoke" }}>
                {/* <Toolbar/> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <img src={FirstImage} style={{ height: "500px", width: "100%", boxSizing: "cover" }} />
                    </Grid>

                </Grid>
                <section sx={{ p: 3 }}>
                    <Grid container spacing={3} sx={{ p: 3 }}>
                        <Grid item xs={12} sm={12} md={12} sx={{ marginTop: "20px" }}>
                            <Box style={{ width:'94%',marginLeft:"3%" ,paddingTop:"20px",background: "white", borderBottom: "2px yellow",}}>
                            <Typography variant='h5' style={{ fontWeight: "bold", textAlign: "center", marginBottom: '25px' }}>Winning hearts with Dum Cooked Fresh Handi Biryanis</Typography>
                                <Grid container spacing={3}>
                                    {IconImage.map((value, index) => (
                                        <Grid item xs={3} key={index} style={{ textAlign: "center" }}>
                                            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'yellow', textAlign: "center", marginLeft: "90px" }}>
                                                <img src={value.img}
                                                    className=""
                                                    sx={{ color: "skyblue", background: "white" }} height="100px" width="100px"
                                                />
                                            </div>
                                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{value.heading}</Typography>
                                            <Typography>
                                                {value.para}
                                            </Typography>


                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ background: "white", borderBottom: "2px yellow", marginTop: "20px" }}>
                            <Box style={{ width:'90%',marginLeft:"5%" ,padding:"20px"}}>
                            <Typography variant='h4' style={{ fontWeight: "bold", marginBottom: '25px', }}>Our Menu</Typography>
                                <Grid container spacing={3}>
                                    {Menu.map((item) => (
                                        <Grid item xs={4}>
                                            <Card>
                                                <CardActionArea>
                                                    <CardMedia
                                                        sx={{ height: "250px", boxSizing: "100%" }}
                                                        component={"img"}
                                                        src={item.img}
                                                    />
                                                    <CardContent>
                                                        <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: "bold" }}>{item.heading}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12} style={{ textAlign:"center" }}>
                                        <Button variant='contained' className='btn' style={{ background:"goldenrod",height:"50px",margin:"auto",fontWeight:"bold",fontSize:"20px" }}>All Menu</Button>
                                    </Grid>

                            </Grid>
                           </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{ background: "white", borderBottom: "2px yellow", marginTop: "20px" }}>
                            <Box style={{ width:'90%',marginLeft:"5%" ,padding:"20px"}}>
                                <Grid container spacing={3} sx={{ background:"white",paddingTop:"20px" }}>
                                   <Grid item xs={6}>
                                    <img src={BhHome} alt="About Biryani" width='100%' height='100%'/>
                                   </Grid>
                                   <Grid item xs={6} sx={{ background:"whitesmoke" ,marginTop:"22px"}}>
                                     <Typography variant='h4'>Pioneers of Fresh Handi Biryanis - Dum cooked fresh on every order</Typography>
                                     <br/><br/>
                                     <Typography variant='p' sx={{ wordSpacing:"5px", }}>BBK prides itself in using the most fresh, highest quality ingredients and most stringent quality checks & processes for preparing our food. Each biryani is individually prepared in traditional dum style in natural clay handis. And the same Handi Biryani is delivered to the customer in which it is Dum cooked individually after that customer order is received by us.</Typography>
                                     <br/><br/>
                                     <Typography variant='p' sx={{ wordSpacing:"5px", }}>BBK takes around 30mins to fresh Dum cook each Gourmet Handi Biryani & Deliver the same Handi in around 60mins to the customer. This helps keeps freshness, authenticity, deliciousness & flavors. BBK brings the Royal Biryani to you, prepared in the traditional dum style, slow-cooked to perfection by our Khansamas.</Typography>
                                     <br/><br/>
                                     <Typography variant="h4">#Bringsyoutogether</Typography>
                                   </Grid>
                                </Grid>
                           </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{ background: "white", borderBottom: "2px yellow", marginTop: "20px" }}>
                            <Box style={{ width:'90%',marginLeft:"5%" ,padding:"20px"}}>
                            <Typography variant='h4' style={{ fontWeight: "bold", marginBottom: '25px', }}>In The Media</Typography>
                                <Grid container spacing={3} sx={{ background:"whitesmoke",marginBottom: '25px' }}>
                                    {Media.map((item) => (
                                        <Grid item xs={2} >
                                           <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'yellow', textAlign: "center", }}>
                                                <img src={item.img}
                                                    className=""
                                                    sx={{ color: "skyblue", background: "white" }} height="100px" width="100px"
                                                />
                                            </div>
                                        </Grid>
                                    ))}
                                   

                            </Grid>
                           </Box>
                    </Grid>
                </section>
            </Box >
        </React.Fragment >
    );
}


