import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import doctorSM from '../../../images/doctor-small.png';

const OurDoctors = () => {
    return (
        <Container>
            <Typography sx={{ pt: 10, pb: 4, fontWeight: 600, color: "#5CE7ED" }} variant="h6">
                OUR DOCTORS
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5, border: 0, boxShadow: 0 }}>
                        <img style={{ width: "80%" }} src={doctorSM} alt="" />
                        <Typography variant="body1" color="text.primary" sx={{py: 0.5}}>
                            <b>Dr. Caudi</b>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            <b>+61 452 200 126</b>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5, border: 0, boxShadow: 0 }}>
                        <img style={{ width: "80%" }} src={doctorSM} alt="" />
                        <Typography variant="body1" color="text.primary" sx={{py: 0.5}}>
                            <b>Dr. Caudi</b>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            <b>+61 452 200 126</b>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5, border: 0, boxShadow: 0 }}>
                        <img style={{ width: "80%" }} src={doctorSM} alt="" />
                        <Typography variant="body1" color="text.primary" sx={{py: 0.5}}>
                            <b>Dr. Caudi</b>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            <b>+61 452 200 126</b>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurDoctors;