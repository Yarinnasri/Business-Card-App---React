import { Navigate } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useFormsValidate from "../../forms/hooks/useFormsValidate";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();

  const { value, ...rest } = useFormsValidate(
    initialCardForm,
    cardSchema,
    handleCreateCard
  );

  if (!user || !user.isBusiness) return <Navigate to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="Create Business Card"
        data={value.formData}
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.formErrors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleFormChange}
      ></CardForm>
    </Container>
  );
};

export default CreateCardPage;
