import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import chess from '../assets/chess.webp'
import factory from '../assets/factory.webp'
import flower from '../assets/flower.webp'
import fruits from '../assets/fruits.webp'
import illuminate from '../assets/lluminate.webp'
import GameCarousel from '../components/games/GameCarousel'

const Games = () => {
  return (
    <div>
      <GameCarousel />
      <Container fixed>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          style={{ marginBlock: '80px' }}
        >
          <Link to="/games/chess">
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #d0d0d0',
                borderRadius: '15px'
              }}
            >
              <img
                alt=""
                src={chess}
                style={{
                  width: 170,
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              />
              <Typography fontSize={20} variant="h5">
                Chess
              </Typography>
            </Box>
          </Link>
          <Link to="/games/illuminate">
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #d0d0d0',
                borderRadius: '15px'
              }}
            >
              <img
                alt=""
                src={illuminate}
                style={{
                  width: 170,
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              />
              <Typography fontSize={20} variant="h5">
                Illuminate
              </Typography>
            </Box>
          </Link>
          <Link to="/games/chocolate-factory">
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #d0d0d0',
                borderRadius: '15px'
              }}
            >
              <img
                alt=""
                src={factory}
                style={{
                  width: 170,
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              />
              <Typography fontSize={20} variant="h5">
                Chocolate Factory
              </Typography>
            </Box>
          </Link>
          <Link to="/games/fruit-cubes">
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #d0d0d0',
                borderRadius: '15px'
              }}
            >
              <img
                alt=""
                src={fruits}
                style={{
                  width: 170,
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              />
              <Typography fontSize={20} variant="h5">
                Fruit Cube
              </Typography>
            </Box>
          </Link>
          <Link to="/games/flower-burst">
            <Box
              sx={{
                padding: '20px',
                border: '1px solid #d0d0d0',
                borderRadius: '15px'
              }}
            >
              <img
                alt=""
                src={flower}
                style={{
                  width: 170,
                  height: 170,
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '10px'
                }}
              />
              <Typography fontSize={20} variant="h5">
                Flower burst
              </Typography>
            </Box>
          </Link>
        </Stack>
      </Container>
    </div>
  )
}

export default Games
