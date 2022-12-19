import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//auth
import { ReservationWithoutAuth } from 'services/HttpService';
import TableDatePicker from './TableDatePicker';

// ============================|| FIREBASE - LOGIN ||============================ //

const Form = ({ ...others }) => {
    let navigate = useNavigate();
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [store, setStore] = useState({
        tokenKey: "",
        currentUser: "",
        refreshToken: "",
        roleName: "",
    });
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const sendRequest = (path) => {
        ReservationWithoutAuth(("/auth/" + path), {
            email: email,
            password: password,
        })
            .then((res) => res.json())
            .then((result) => { /* localStorage.setItem("tokenKey",result.accessToken);
                            localStorage.setItem("refreshKey",result.refreshToken);
                            localStorage.setItem("currentUser",result.userId);
                            localStorage.setItem("currentUserRole",result.roleName); */
                setStore({ roleName: result.roleName, });
            })
            .catch((err) => console.log(err))
    }
    const handleButton = (path) => {
        sendRequest(path);
        setEmail("");
        setPassword("");
        console.log(localStorage);
        // localStorage.getItem("currentUserRole") === "EMPLOYEE" ? navigate('/users') : navigate('/admin/servers')
        navigate("/user/reservations");
    };
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    //email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    //password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async ({ setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleSubmit, isSubmitting, touched }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="form-server">Email Address</InputLabel>
                            <OutlinedInput
                                id="form-server"
                                type="" email
                                value={email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={(i) => handleEmail(i.target.value)}
                                label="Email Address"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={(i) => handlePassword(i.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}


                        </FormControl>

                        <FormControl fullWidth>
                            <TableDatePicker />
                        </FormControl>


                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ backgroundColor: "#6F6E6E" }}
                                    onClick={() => handleButton('login')}
                                >
                                    Get Reservation
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Form;