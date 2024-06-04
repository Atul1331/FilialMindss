import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.jpeg'
import { useAuthContext } from '../../context/auth-context'
import useLogout from '../../hooks/use-logout'

const Navbar = () => {
  const navigate = useNavigate()
  const { authUser } = useAuthContext()
  const { loading, logout } = useLogout()

  return (
    <Container fixed style={{ backgroundColor: '#fff' }}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        sx={{ padding: '15px' }}
      >
        <img alt="" src={logo} style={{ height: '40px' }} />
        <Stack alignItems="center" direction="row" gap={1}>
          <Link to="/">
            <Box
              sx={{
                padding: '4px 8px',
                border: '1px solid #664dd4',
                borderRadius: '15px',
                color: '#664dd4'
              }}
            >
              <Typography sx={{ fontSize: '12px !important' }} variant="body1">
                Home
              </Typography>
            </Box>
          </Link>

          <Link to="/parent-dashboard">
            <Box
              sx={{
                padding: '4px 8px',
                border: '1px solid #555',
                borderRadius: '15px',
                color: '#555'
              }}
            >
              <Typography sx={{ fontSize: '12px !important' }} variant="body1">
                Dashboard
              </Typography>
            </Box>
          </Link>
          <Link to="/activity">
            <Box
              sx={{
                padding: '4px 8px',
                border: '1px solid #555',
                borderRadius: '15px',
                color: '#555'
              }}
            >
              <Typography sx={{ fontSize: '12px !important' }} variant="body1">
                Activity
              </Typography>
            </Box>
          </Link>
        </Stack>
        {authUser ? (
          <Stack alignItems="center" direction="row" gap={3}>
            <Button
              size="small"
              sx={{
                padding: '7px',
                paddingLeft: '11px',
                borderRadius: '20px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                color: '#664dd4',
                fontSize: '12px !important',
                boxShadow: '#664dd433 0px 8px 24px',
                border: '1px solid #664dd4',
                '&:hover': {
                  backgroundColor: '#664dd4',
                  color: '#fff',
                  borderColor: 'transparent',
                  boxShadow: '#664dd433 0px 8px 24px',
                  '> div': {
                    backgroundColor: '#fff',
                    '> i': {
                      color: '#333 !important',
                      transform: 'rotateZ(-405deg) !important'
                    }
                  }
                },
                transition: 'all .3s ease'
              }}
              variant="contained"
              onClick={logout}
            >
              {loading ? 'Loading' : 'Logout'}
              <Box
                sx={{
                  padding: '0px 6px',
                  background: '#664dd4',
                  borderRadius: '50%',
                  fontSize: '14px',
                  marginLeft: '10px',
                  transition: 'background-color .3s ease'
                }}
              >
                <i
                  className="fa-solid fa-arrow-right"
                  style={{
                    color: '#fff',
                    transform: 'rotateZ(-45deg)',
                    transition: 'all .3s ease'
                  }}
                ></i>
              </Box>
            </Button>
          </Stack>
        ) : (
          <Stack alignItems="center" direction="row" gap={3}>
            <Link to="/login">
              <Typography
                sx={{ color: '#333', fontSize: '14px' }}
                variant="body1"
              >
                Sign in
              </Typography>
            </Link>
            <Button
              size="small"
              sx={{
                padding: '7px',
                paddingLeft: '11px',
                borderRadius: '20px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                color: '#664dd4',
                fontSize: '12px !important',
                boxShadow: '#664dd433 0px 8px 24px',
                border: '1px solid #664dd4',
                '&:hover': {
                  backgroundColor: '#664dd4',
                  color: '#fff',
                  borderColor: 'transparent',
                  boxShadow: '#664dd433 0px 8px 24px',
                  '> div': {
                    backgroundColor: '#fff',
                    '> i': {
                      color: '#333 !important',
                      transform: 'rotateZ(-405deg) !important'
                    }
                  }
                },
                transition: 'all .3s ease'
              }}
              variant="contained"
              onClick={() => navigate('/register')}
            >
              Start Free
              <Box
                sx={{
                  padding: '0px 6px',
                  background: '#664dd4',
                  borderRadius: '50%',
                  fontSize: '14px',
                  marginLeft: '10px',
                  transition: 'background-color .3s ease'
                }}
              >
                <i
                  className="fa-solid fa-arrow-right"
                  style={{
                    color: '#fff',
                    transform: 'rotateZ(-45deg)',
                    transition: 'all .3s ease'
                  }}
                ></i>
              </Box>
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  )
}
export default Navbar
