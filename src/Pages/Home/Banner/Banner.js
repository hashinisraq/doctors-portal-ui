import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';


const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="h6"
                            sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique delectus illum neque accusamus sit accusantium quis soluta enim eius eligendi.
                        </Typography>
                        <Link style={{ backgroundColor: '#5CE7ED', textDecoration: 'None' }} to='/appointment'>
                            <Button variant='contained'>Get Appointment</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '65%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;