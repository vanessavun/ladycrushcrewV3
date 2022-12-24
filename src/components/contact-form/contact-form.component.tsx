import { useState, ChangeEvent } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { ContactFormContainer } from "./contact-form-styles";

const defaultFormFields = {
    name: '',
    email: '',
    response: ''
}

function ContactForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, response} = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
      <ContactFormContainer>
        <form action="https://public.herotofu.com/v1/c87e82c0-832b-11ed-b38f-a1ed22f366b1" method="post" target="_blank" onSubmit={() => resetFormFields()}>
          <FormInput
            label="Name"
            type="text"
            required
            onChange={handleChange}
            name="name"
            value={name}
          />
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="What's your message for us?"
            type="text"
            required
            onChange={handleChange}
            name="response"
            value={response}
          />
          <Button type="submit">Submit</Button>
        </form>
      </ContactFormContainer>
  );
}

export default ContactForm;
