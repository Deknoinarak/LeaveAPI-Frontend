import React from "react";
import { io } from "socket.io-client";
import * as mui from "@mui/material";
import * as muiIcon from "@mui/icons-material";
import * as bs from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/all.min.css";

const socket = io("ws://localhost:8080");

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: name,
  };
};

export const Playground = () => {
  const [messageData, setMessageData] = React.useState([]);
  const [message, setMessage] = React.useState("");

  socket.on("connect", () => {
    console.log(socket.id);
  });

  React.useEffect(() => {
    socket.on("message", (data) => {
      setMessageData((m) => [...m, data]);
    });
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <bs.Container fluid>
      <bs.Container>
        <mui.Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Incoming Message
        </mui.Typography>
        <mui.List>
          {messageData.map((data, index) => (
            <mui.ListItem key={index}>
              <mui.ListItemIcon>
                <mui.Avatar {...stringAvatar(data.user)}></mui.Avatar>
              </mui.ListItemIcon>
              <mui.ListItemText primary={data.message} />
            </mui.ListItem>
          ))}
        </mui.List>
      </bs.Container>
      <bs.Container>
        <mui.FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          fullWidth
        >
          <mui.InputLabel htmlFor="outlined-adornment-password">
            Password
          </mui.InputLabel>
          <mui.OutlinedInput
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            endAdornment={
              <mui.InputAdornment position="end">
                <mui.IconButton
                  aria-label="send"
                  onClick={handleSendMessage}
                  edge="end"
                >
                  <muiIcon.Send color="primary" />
                </mui.IconButton>
              </mui.InputAdornment>
            }
            label="Message"
          />
        </mui.FormControl>
      </bs.Container>
    </bs.Container>
  );
};
