import { Button, TextField, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';
import React from 'react';
import { Box } from '@mui/system';

const Contact = () => {
    const contactBanner = {
        background: `url(${bg})`,
        backgroundColor: 'rgb(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 175
    }

    const handleContactSubmit = e => {
        document.getElementById("contactForm").reset();
        e.preventDefault();
    }

    return (
        <Box style={contactBanner} sx={{ pb: 8 }}>
            <Typography sx={{ pt: 10, fontWeight: 600, color: "#5CE7ED" }} variant="h6">
                CONTACT US
            </Typography>
            <Typography sx={{ py: 2, color: "white" }} variant="h5">
                Always Connect with us
            </Typography>
            <form id="contactForm" onSubmit={handleContactSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    style={{ backgroundColor: "white" }}
                    placeholder="Your Email"
                    size="small"
                    required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    style={{ backgroundColor: "white" }}
                    placeholder="Subject"
                    size="small"
                    required
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    style={{ backgroundColor: "white" }}
                    placeholder="Your Message"
                    size="small"
                    multiline
                    rows={4}
                    required
                />
                <br />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </Box>
    );
};

export default Contact;