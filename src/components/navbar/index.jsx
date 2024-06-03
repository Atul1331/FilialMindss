import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Container fixed style={{ backgroundColor: "#fff" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "15px" }}
      >
        <img src={logo} alt="" style={{ height: "40px" }} />
        <Stack direction="row" alignItems="center" gap={1}>
          <Link to="/">
          <Box
            sx={{
              padding: "4px 8px",
              border: "1px solid #664dd4",
              borderRadius: "15px",
              color: "#664dd4",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "12px !important" }}>
              Home
            </Typography>
          </Box>
          </Link>
          
          <Link to="/parent-dashboard">
          <Box
            sx={{
              padding: "4px 8px",
              border: "1px solid #555",
              borderRadius: "15px",
              color: "#555",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "12px !important" }}>
              Dashboard
            </Typography>
          </Box>
          </ Link>
          <Link to="/games">
          <Box
            sx={{
              padding: "4px 8px",
              border: "1px solid #555",
              borderRadius: "15px",
              color: "#555",
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "12px !important" }}>
              Contact us
            </Typography>
          </Box>
          </ Link>
        </Stack>
        <Stack direction="row" alignItems="center" gap={3}>
          <Link to="/login">
            <Typography
              variant="body1"
              sx={{ color: "#333", fontSize: "14px" }}
            >
              Sign in
            </Typography>
          </Link>
          <Button
            variant="contained"
            sx={{
              padding: "7px",
              paddingLeft: "11px",
              borderRadius: "20px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#664dd4",
              fontSize: "12px !important",
              boxShadow: "#664dd433 0px 8px 24px",
              border: "1px solid #664dd4",
              "&:hover": {
                backgroundColor: "#664dd4",
                color: "#fff",
                borderColor: "transparent",
                boxShadow: "#664dd433 0px 8px 24px",
                "> div": {
                  backgroundColor: "#fff",
                  "> i": {
                    color: "#333 !important",
                    transform: "rotateZ(-405deg) !important",
                  },
                },
              },
              transition: "all .3s ease",
            }}
            size="small"
            onClick={() => navigate("/register")}
          >
            Start Free
            <Box
              sx={{
                padding: "0px 6px",
                background: "#664dd4",
                borderRadius: "50%",
                fontSize: "14px",
                marginLeft: "10px",
                transition: "background-color .3s ease",
              }}
            >
              <i
                className="fa-solid fa-arrow-right"
                style={{
                  color: "#fff",
                  transform: "rotateZ(-45deg)",
                  transition: "all .3s ease",
                }}
              ></i>
            </Box>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
