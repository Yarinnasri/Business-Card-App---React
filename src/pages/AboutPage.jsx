import PageHeader from "../components/PageHeader";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about the application"
      />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12} alignSelf="center">
          <Typography variant="h4" color="text.primary">
            {" "}
            Welcome to Business Card Showcase{" "}
          </Typography>
          <Typography color="text.primary">
            {" "}
            At Your Business , we believe in the power of connections and the
            impact of a well-crafted first impression. Your business card is
            more than just a piece of paper; it's a representation of you and
            your brand. That's where we come in. Our mission is to elevate your
            personal and professional presence through exceptional business card
            design. We understand that in today's fast-paced world, making a
            lasting impression is crucial. That's why we are dedicated to
            providing you with top-notch, custom business card solutions that
            reflect your unique identity and leave a lasting impression. Why
            choose our Business Name for your business card needs?
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          alignSelf="center"
          sx={{ display: { md: "flex", xs: "flex" }, justifyContent: "center" }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
