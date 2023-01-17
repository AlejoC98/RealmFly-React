import { Box, Typography, useTheme, TextField, InputAdornment, Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { tokens } from "../../theme";
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";

const Login = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid 
          borderRight="1px #fff solid"
          item
          xs={6} 
          display="flex" 
          justifyContent="center"
          alignItems="center">
          <Box 
              component="img" 
              width={60} 
              height={60} alt="RealmFly" src={`../../assets/realm-icon.png`}/>
            <Typography variant="h1" fontWeight="bold">RealmFly</Typography>
        </Grid>
        <Grid item xs={6}>
          <form>
          <TextField
            id="username"
            label="Username"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle/>
                    </InputAdornment>
                ),
            }}
            variant="filled"
            fullWidth
            margin="dense"
            color="primary"
            type="email"
          />
          <TextField
            id="password"
            label="Password"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <KeyIcon />
                    </InputAdornment>
                ),
            }}
            variant="filled"
            fullWidth
            margin="dense"
            color="primary"
            type="password"
          />
          <Button variant="contained" fullWidth color="success" endIcon={<LoginIcon/>} 
            sx={{
                ":hover": {
                    background: colors.persionGreen[600]
                },
                background: colors.persionGreen[500],
                marginTop: "20px",
                color: "#fff",
                marginBottom: "30px"
            }}
            size="large"
            type="submit"
          >
            Log In
          </Button>
          </form>
          <Box display="flex" justifyContent="space-between" color="#fff">
        <Button sx={{ color: colors.charcoal[200]}} variant="text" startIcon={<LockOutlinedIcon />}>
          Forgot Password?
        </Button>
        <Button component={Link} to={'/signin'} sx={{ color: colors.charcoal[200]}} variant="text">
          Create Account
        </Button>
      </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login;
