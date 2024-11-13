import React from 'react'
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#212121', color: 'white', py: 10,mt:10 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        {/* About Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="white">
            We are a company dedicated to providing top-notch solutions to all our clients.
            Our mission is to make technology accessible and easy for everyone.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="white">
            Email: info@example.com <br />
            Phone: +123-456-7890 <br />
            Address: 123 Tech Street, Innovation City
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              component={Link}
              href="https://facebook.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://instagram.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Copyright */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved. <br />
            Terms of Service | Privacy Policy
          </Typography>
        </Grid>
      </Grid>

      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="white">
          Designed & Developed by Your Company
        </Typography>
      </Box>
    </Container>
  </Box>
  )
}

export default Footer