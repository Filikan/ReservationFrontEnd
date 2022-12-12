import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { Component } from 'react';

class NewReservation extends Component {
    
    render() {
        return (
            <div>
                <FormControl>
                    <InputLabel>Ad</InputLabel>
                    <Input onChange={(i) => handleUsername(i.target.value)} />
                    <InputLabel style={{ top: 80 }}>Soyad</InputLabel>
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
            </div>
        );
    }
}

export default NewReservation;