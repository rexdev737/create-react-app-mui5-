import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import SidePicture from '../SidePicture';

interface IFormInputs {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password : yup.string().required().min(8, "password is too short").matches(/(?=.*[0-9])/, "password must contain a number.")
}).required()

const SignIn = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  // const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    // axios.get
  };

  useEffect(() => {

  }, [])

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <SidePicture />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...register("email", { required: true })}
              error={errors.email ? true : false}
              helperText={errors.email && errors.email.message}
              {...register("email", { required: true })}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
              error={errors.password ? true : false}
              helperText={errors.password && errors.password.message}
              {...register("password", { required: true })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn