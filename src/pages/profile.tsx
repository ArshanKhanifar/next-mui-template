import { useSession } from "next-auth/react";

import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const ProfileCard = ({ session }) => {
  return (
    <Card>
      <CardContent>
        <Avatar src={session.user.image} alt={session.user.name} />
        <Typography variant="h5" component="h2">
          {session.user.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {session.user.email}
        </Typography>
        <Typography variant="body2" component="p">
          Expires: {new Date(session.expires).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function Profile() {
  const { data: session, status } = useSession();
  if (!session) {
    return null;
  }
  return <div>{session.user && <ProfileCard session={session} />}</div>;
}
