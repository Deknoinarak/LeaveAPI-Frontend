import React, { useState } from "react";
import moment from "moment";
import "moment/locale/th";
import * as mui from "@mui/material";
import * as muiIcon from "@mui/icons-material";

export const Notifications = ({ data }) => {
  // * Variables * //
  // eslint-disable-next-line
  const [notificationData, setNotificationData] = useState(data);

  // * Functions * //
  const typeHandler = (type, name, returnType) => {
    if (returnType === "icon") {
      if (type === "decline") return <muiIcon.Close />;
      if (type === "approve") return <muiIcon.Done />;
      if (type === "pending") return <muiIcon.PendingActions />;
    }
    if (returnType === "type") {
      if (type === "decline") return `ปฏิเสธการลาของ ${name}`;
      if (type === "approve") return `อนุมัติการลาของ ${name}`;
      if (type === "pending") return ` ${name} ได้ยื่นคำขอการลา`;
    }
  };

  return (
    <mui.List
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
    >
      {notificationData.map((notiData) => (
        <mui.ListItem>
          {console.log(notiData)}
          <mui.ListItemAvatar>
            <mui.Avatar>
              {typeHandler(notiData.type, notiData.name, "icon")}
            </mui.Avatar>
          </mui.ListItemAvatar>
          <mui.ListItemText
            primary={typeHandler(notiData.type, notiData.name, "type")}
            secondary={`โดย${notiData.author} ${moment(
              notiData.time
            ).fromNow()}`}
          />
        </mui.ListItem>
      ))}
    </mui.List>
  );
};
