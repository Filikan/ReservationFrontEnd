import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

class index extends Component {
    render() {
        return (
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(i) => handleUsername(i.target.value)} />
                <InputLabel style={{ top: 80 }}>Password</InputLabel>
                <Input style={{ top: 40 }}
                    onChange={(i) => handlePassword(i.target.value)} />
                <Button variant="contained" style={{
                    marginTop: 60, background: 'linear-gradient(45deg,#2196F3 30%,#21CBF3 90%)',
                    color: 'white'
                }}
                    onClick={() => handleButton("register")}>Register</Button>
                <FormHelperText style={{ margin: 20 }}>Are you already registered?</FormHelperText>
                <Button variant="contained" style={{
                    background: 'linear-gradient(45deg,#2196F3 30%,#21CBF3 90%)',
                    color: 'white'
                }}
                    onClick={() => handleButton("login")}>Login</Button>
            </FormControl>
        );
    }
}

export default NewReservation;