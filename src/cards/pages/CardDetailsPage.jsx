import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardHead from "../components/card/CardHead";
import { Button } from "@mui/material";

const CardDetailsPage = () => {
  const { id } = useParams();
  const {
    value: { card },
    handleGetCardFromClient,
  } = useCards();

  const website = card?.web
    ? card.web.includes("http")
      ? card.web
      : `https://${card.web}`
    : "#";

  useEffect(() => {
    handleGetCardFromClient(id);
  }, [handleGetCardFromClient, id]);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find all the information about the business you are looking for."
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={8} xs={12}>
          {card && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box mb={3}>
                <CardHead image={card.image} />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  href={website}
                  color="primary"
                  target="_blank"
                >
                  Visit Website
                </Button>
                <Typography variant="h4" color="textPrimary" my={(0, 2)}>
                  Title: {card.title}
                </Typography>
                <Typography variant="h6" color="textPrimary" paragraph>
                  Subtitle: {card.subtitle}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Description: {card.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Phone: {card.phone}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Email: {card.email}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Address: {card.address.country}, {card.address.city},
                  {card.address.street}, {card.address.houseNumber}
                </Typography>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardDetailsPage;
