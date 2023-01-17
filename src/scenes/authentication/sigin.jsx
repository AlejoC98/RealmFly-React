import React from 'react';
import { Box, Button, TextField, useTheme, InputAdornment, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { tokens } from '../../theme';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const SignIn = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box backgroundColor={colors.charcoal[700]} p="20px" borderRadius={2}>
        <Typography variant='h2' fontWeight="bold" textAlign="center" margin={3}>Request Account</Typography>
        <form>
            <TextField
                type="name"
                label="First Name"
                variant="filled"
                fullWidth
                margin="dense"
            />
            <TextField
                type="name"
                label="Last Name"
                variant="filled"
                fullWidth
                margin="dense"
            />
            <TextField
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                margin="dense"
            />
            <TextField
                type="name"
                label="Company"
                variant="filled"
                fullWidth
                margin="dense"
            />
            <Button variant='contained' size="large" fullWidth endIcon={<SendOutlinedIcon/>} sx={{ marginTop: "30px"}}>
                Send
            </Button>
        </form>
        <Box display="flex" justifyContent="start" alignItems="start" mt="30px">
            <Button 
                component={Link} 
                to={'/login'} 
                variant="text" 
                startIcon={<ArrowBackIosIcon />} 
                sx={{ color: colors.charcoal[200]}}
            >
                Back
            </Button>
        </Box>
    </Box>
  )
}

export default SignIn
