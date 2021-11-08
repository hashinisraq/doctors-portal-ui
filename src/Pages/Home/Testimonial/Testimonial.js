import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Container sx={{ textAlign: 'left', pb: 10 }}>
            <Typography sx={{ pt: 10, pb: 2, fontWeight: 600, color: "#5CE7ED" }} variant="body1">
                TESTIMONIAL
            </Typography>
            <Typography sx={{ pb: 6 }} variant="h5">
                What's Our Patients <br />
                Says
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 4, pb: 4 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates deserunt inventore reiciendis repellendus eius ab, tempora, blanditiis dolor, ut voluptas alias consectetur laudantium rem nostrum sed aliquid molestias harum unde recusandae cumque incidunt magnam. Perferendis sit mollitia quas pariatur, blanditiis quibusdam odit officia iste, consectetur quos sed natus vel.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', px: 4 }}>
                            <img style={{ width: "20%" }} src={people1} alt="" />
                            <Box sx={{ pl: 2 }}>
                                <Typography sx={{ color: "#5CE7ED" }}>
                                    Winson Herry
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 4, pb: 4 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates deserunt inventore reiciendis repellendus eius ab, tempora, blanditiis dolor, ut voluptas alias consectetur laudantium rem nostrum sed aliquid molestias harum unde recusandae cumque incidunt magnam. Perferendis sit mollitia quas pariatur, blanditiis quibusdam odit officia iste, consectetur quos sed natus vel.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', px: 4 }}>
                            <img style={{ width: "20%" }} src={people2} alt="" />
                            <Box sx={{ pl: 2 }}>
                                <Typography sx={{ color: "#5CE7ED" }}>
                                    Winson Herry
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ px: 4, pb: 4 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates deserunt inventore reiciendis repellendus eius ab, tempora, blanditiis dolor, ut voluptas alias consectetur laudantium rem nostrum sed aliquid molestias harum unde recusandae cumque incidunt magnam. Perferendis sit mollitia quas pariatur, blanditiis quibusdam odit officia iste, consectetur quos sed natus vel.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', px: 4 }}>
                            <img style={{ width: "20%" }} src={people3} alt="" />
                            <Box sx={{ pl: 2 }}>
                                <Typography sx={{ color: "#5CE7ED" }}>
                                    Winson Herry
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    California
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Testimonial;