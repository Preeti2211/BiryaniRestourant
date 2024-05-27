import { Box, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box style={{ background: "rgb(124 8 51)", padding: "20px", color: "white" }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}>QUICK LINKS</Typography>
                    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Our Vision</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Media</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Loyalty</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact Us</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Order Online</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Sponsor a Biryani</a>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>Unsubscribe</a>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}>LOCATIONS</Typography>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.156373776572!2d77.37654907460087!3d28.565066687142803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d9e7714c5%3A0x61683761eb3b21db!2sOpportunity%20Hubb%20%7C%20Best%20Placement%20%26%20IT%20Consultant%20in%20India%20*21%20All%20Service%20Provider%20*21!5e0!3m2!1sen!2sin!4v1716791343351!5m2!1sen!2sin" 
                    width="200" height="100" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                    <Typography>A 20, Ground Floor, Rajouri Garden</Typography>
                    <Typography>New Delhi</Typography>
                    <Typography>9555212212</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5" style={{ marginBottom: "10px" }}>Follow us on</Typography>
                    <Box>
                        <IconButton href="#" style={{ color: "white" }}><FacebookIcon /></IconButton>
                        <IconButton href="#" style={{ color: "white" }}><TwitterIcon /></IconButton>
                        <IconButton href="#" style={{ color: "white" }}><InstagramIcon /></IconButton>
                        <IconButton href="#" style={{ color: "white" }}><YouTubeIcon /></IconButton>
                        <IconButton href="#" style={{ color: "white" }}><LinkedInIcon /></IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Box textAlign="center" style={{ marginTop: "20px" }}>
                <Typography variant="body2">Copyright © 2024   All Rights Reserved. | Terms & Conditions</Typography>
            </Box>
        </Box>
    );
}
