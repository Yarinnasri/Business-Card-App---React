import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedBack";
import { useEffect } from "react";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const {value:{cards, error, isPending, filteredCards}, handleGetCardsFromApi} = useCards();


    useEffect(() => {
      handleGetCardsFromApi();
    }, [handleGetCardsFromApi]);

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />
      <CardsFeedback isPending={isPending} error={error} cards={filteredCards} />
    </Container>
  );
};

export default CardsPage;
