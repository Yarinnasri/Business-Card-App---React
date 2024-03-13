import React, { useEffect, useState } from "react";
import { useUser } from "../providers/UserProvider";
import { Paper, Grid, Avatar, Typography, Button } from "@mui/material";
import { getUser } from "../services/usersApiService";
import Spinner from "../../components/Spinner";
import ROUTES from "../../routes/routesModel";

const UserProfile = () => {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(user._id);
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user && user._id) {
      fetchUser();
    }
  }, [user]);

  if (!currentUser) {
    return <Spinner justifyContent="center" alignItems="center" />;
  }

  const date = new Date(currentUser.createdAt);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <Paper elevation={3} sx={{ pt: 2 }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12} container justifyContent="center">
          <Avatar
            alt={currentUser.name}
            src={currentUser.avatarUrl}
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          container
          direction="column"
          alignItems="center"
        >
          <Typography variant="h4" gutterBottom>
            {`${currentUser.name.first} ${currentUser.name.middle} ${currentUser.name.last}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Phone: {currentUser.phone}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Email: {currentUser.email}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Address:{" "}
            {`${currentUser.address.country}, ${currentUser.address.city}, ${currentUser.address.street}, ${currentUser.address.houseNumber}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Business User: {currentUser.isBusiness ? "Yes" : "No"}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Admin User: {currentUser.isAdmin ? "Yes" : "No"}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Created At: {formattedDate}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button
            variant="outlined"
            href={ROUTES.EDIT_USER}
            color="primary"
            sx={{ my: 2 }}
          >
            Edit Profile
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserProfile;
