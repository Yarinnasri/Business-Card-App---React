import { func, object, string } from "prop-types";
import ROUTES from "../../routes/routesModel";
import InputComponent from "../../forms/components/InputComponent";
import FormComponent from "../../forms/components/FormComponent";

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  data,
  onFormChange,
  onInputChange,
  title,
}) => {
  return (
    <FormComponent
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.CARDS}
    >
      <InputComponent
        name="title"
        label="title"
        error={errors.title}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="description"
        label="description"
        error={errors.description}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="phone"
        label="phone"
        type="phone"
        error={errors.phone}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="email"
        label="email"
        type="email"
        error={errors.email}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="webUrl"
        label="web"
        error={errors.webUrl}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />

      <InputComponent
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <InputComponent
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <InputComponent
        name="state"
        label="state"
        error={errors.state}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <InputComponent
        name="country"
        label="country"
        error={errors.country}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="city"
        label="city"
        error={errors.city}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="street"
        label="street"
        error={errors.street}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />

      <InputComponent
        name="houseNumber"
        label="houseNumber"
        type="number"
        error={errors.houseNumber}
        handleChange={onInputChange}
        data={data}
        sm={6}
      />
      <InputComponent
        name="zip"
        label="zip"
        type="number"
        error={errors.zip}
        handleChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </FormComponent>
  );
};

CardForm.propTypes = {
    onSubmit: func.isRequired,
    onReset: func.isRequired,
    errors: object.isRequired,
    onFormChange: func.isRequired,
    data: object.isRequired,
    onInputChange: func.isRequired,
    title: string.isRequired,
}

export default CardForm;
