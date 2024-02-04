import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chatbot() {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyB2t5hEPEVRRXB55r7PBU-Dd2s-EyG7eGw";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleSubmit = async () => {
    if (text.trim().length === 0) return;
    setChat((prev) => [...prev, { text, from: "user" }]);
    setText("");
    setLoading(true);
    const result = await model.generateContent(text);
    const response = result.response;
    const text_res = response.text();
    setLoading(false);
    setChat((prev) => [...prev, { text: text_res, from: "bot" }]);
  };

  const leftMessage = (text) => {
    return (
      <Box
        sx={{
          maxWidth: "80%",
          marginRight: "auto",
          padding: "5px 10px",
          backgroundColor: "#664dd4",
          borderRadius: "8px",
          borderBottomLeftRadius: "0px",
          color: "#eee",
          marginBottom: "8px",
        }}
      >
        <Typography variant="body1" fontSize="14px">
          {text}
        </Typography>
      </Box>
    );
  };

  const rightMessage = (text) => {
    return (
      <Box
        sx={{
          maxWidth: "80%",
          marginLeft: "auto",
          padding: "5px 10px",
          backgroundColor: "#d4cef2",
          borderRadius: "8px",
          borderBottomRightRadius: 0,
          marginBottom: "8px",
        }}
      >
        <Typography variant="body1" fontSize="14px" color="#333">
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      sx={
        active
          ? {
              backgroundColor: "rgba(0,0,0,0.2)",
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }
          : {}
      }
    >
      <Button
        variant="contained"
        style={{
          backgroundColor: "#f6d26f",
          position: "fixed",
          bottom: 20,
          right: 20,
          color: "#444",
          paddingBlock: "10px",
          borderRadius: "30px",
          textTransform: "none",
        }}
        onClick={() => setActive((prev) => !prev)}
      >
        {!active ? (
          <>
            <i
              className="fa-solid fa-robot"
              style={{ marginRight: "10px" }}
            ></i>
            Chatbot
          </>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        )}
      </Button>
      <Stack
        direction="column"
        sx={{
          height: "500px",
          width: "350px",
          position: "fixed",
          bottom: "80px",
          right: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid #eee",
          transform: active ? "translateX(0px)" : "translateX(550px)",
          transition: "all 0.3s ease",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          className="header"
          style={{
            padding: "15px 30px",
            backgroundColor: "#d4cef2",
            color: "#333",
          }}
        >
          <Box
            sx={{
              padding: "8px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          >
            <i className="fa-solid fa-robot" style={{ fontSize: "25px" }}></i>
          </Box>
          <Typography variant="h4" style={{ fontWeight: "700", fontSize: 25 }}>
            Chatbot
          </Typography>
        </Stack>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            scrollbarWidth: "3px",
            padding: "10px",
            overflow: "scroll",
          }}
        >
          {chat.length > 0 ? (
            chat.map((_chat) => {
              return _chat.from === "bot"
                ? leftMessage(_chat.text)
                : rightMessage(_chat.text);
            })
          ) : (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              flex={1}
            >
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "14px", textAlign: "center" }}
              >
                Start Chatting
                <br />&<br />
                see the chat here
              </Typography>
            </Stack>
          )}
          {loading ? leftMessage("typing...") : null}
        </Box>
        <Stack
          direction="row"
          className="footer"
          sx={{ padding: "8px", borderTop: "1px solid #eee" }}
          gap="10px"
        >
          <TextField
            size="small"
            sx={{
              flex: 1,
              ".MuiInputBase-root": { fontSize: "14px !important" },
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type..."
            onKeyDown={(e) => e.nativeEvent.key === "Enter" && handleSubmit()}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#664dd4",
              minWidth: 0,
              "&:hover": {
                backgroundColor: "#6d55da",
              },
            }}
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
