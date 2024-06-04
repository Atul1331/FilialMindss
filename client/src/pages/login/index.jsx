import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

import google from '../../assets/google.png'
import pattern from '../../assets/pattern.svg'
import useLogin from '../../hooks/use-login'

export default function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    pass: ''
  })
  const { loading, login } = useLogin()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs)
    await login(inputs)
  }

  return (
    <Stack direction="row">
      <Box className="left">
        <img alt="" src={pattern} />
      </Box>
      <Box className="right">
        <form onSubmit={handleSubmit}>
          <Button
            sx={{
              borderColor: '#664dd4 !important',
              alignSelf: 'flex-start',
              borderRadius: '20px',
              fontSize: '12px !important',
              textTransform: 'none',
              color: '#664dd4',
              position: 'absolute',
              top: '20px',
              left: '20px',
              '&:hover': {
                backgroundColor: 'rgb(102, 77, 212, 0.04)'
              }
            }}
            variant="outlined"
            onClick={() => navigate('/')}
          >
            <i
              className="fa-solid fa-chevron-left"
              style={{ marginRight: '5px', color: '#664dd4' }}
            ></i>
            Home
          </Button>
          <Typography variant="h2">
            Filial<Typography variant="caption">Minds</Typography>
          </Typography>
          <Typography variant="body1">
            Welcome back, Login to get insights
          </Typography>
          <TextField
            fullWidth
            className="input"
            label="Email"
            type="email"
            value={inputs.email}
            variant="outlined"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <TextField
            fullWidth
            className="input"
            label="Password"
            type="password"
            value={inputs.pass}
            variant="outlined"
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
          {/* <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ marginBottom: "20px" }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked size="small" />}
            label="Remeber me"
            className="checkbox"
          />
          <Typography variant="body1" style={{ margin: 0 }}>
            Forgot password?
          </Typography>
        </Stack> */}
          <Button
            fullWidth
            className="common-button"
            type="submit"
            variant="contained"
          >
            {loading ? 'Loading' : 'Login'}
          </Button>
          <Stack
            alignItems="center"
            className="or-section"
            direction="row"
            gap="20px"
          >
            <Box className="line" />
            <Typography style={{ margin: 0, color: '#ccc' }} variant="body1">
              OR
            </Typography>
            <Box className="line" />
          </Stack>
          <img alt="" className="google-btn" src={google} />
          <Typography className="register" variant="body1">
            Don't have an account?{' '}
            <Typography variant="caption" onClick={() => navigate('/register')}>
              Register
            </Typography>
          </Typography>
        </form>
      </Box>
    </Stack>
  )
}
