import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

import google from '../../assets/google.png'
import pattern from '../../assets/pattern.svg'
import useSignup from '../../hooks/use-register'

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pass: '',
    confPass: ''
  })
  const { loading, signup } = useSignup()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputs)
    await signup(inputs)
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
            Get your free acouunt now, Register with FilialMinds
          </Typography>
          <Stack alignItems="center" direction="row" gap="10px">
            <TextField
              fullWidth
              className="input"
              label="First name"
              type="text"
              value={inputs.firstName}
              variant="outlined"
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
            />
            <TextField
              fullWidth
              className="input"
              label="Last name"
              type="text"
              value={inputs.lastName}
              variant="outlined"
              onChange={(e) =>
                setInputs({ ...inputs, lastName: e.target.value })
              }
            />
          </Stack>
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
          <TextField
            fullWidth
            className="input"
            label="Password"
            type="password"
            value={inputs.confPass}
            variant="outlined"
            onChange={(e) => setInputs({ ...inputs, confPass: e.target.value })}
          />
          {/*<Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          style={{ marginBottom: '20px' }}
        >
          <FormControlLabel
            className="checkbox"
            control={<Checkbox defaultChecked size="small" />}
            label="Remeber me"
          />
           <Typography variant="body1" style={{ margin: 0 }}>
            Forgot password?
          </Typography> 
        </Stack>*/}
          <Button
            fullWidth
            className="common-button"
            type="submit"
            variant="contained"
          >
            {loading ? 'Loading' : 'Sign Up'}
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
            Already a member?{' '}
            <Typography variant="caption" onClick={() => navigate('/login')}>
              Login
            </Typography>
          </Typography>
        </form>
      </Box>
    </Stack>
  )
}
export default Register
