import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, pb: 2 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Link style={{textDecoration: 'None', color: 'white'}} to="/appointment">
                        <Button color="inherit">Appointment</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'None', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'None', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Box> : <NavLink style={{ textDecoration: 'None', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;