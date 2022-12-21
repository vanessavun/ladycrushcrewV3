import { useState, ChangeEvent } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { VolunteerFormContainer } from "./volunteer-form-styles";

const defaultFormFields = {
    name: '',
    email: '',
    location: '',
    response: ''
}

function VolunteerForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
      <VolunteerFormContainer>
        <h2>LADYCRVSHCREW AMBASSADOR TEAM🫰🏽</h2>
        <span>Are you interested in being a part of the empowerment behind LADY CRVSH CREW? Do you want to make an impact in your local climbing community? If the answer is yes, then becoming a LCC Ambassador might be for you!</span>
        <p>LADY CRVSH CREW is a volunteer-based organization. Our ambassadors play an important role in bringing the community together so we can serve our mission to empower women, non-binary friends, and allies through climbing. We require quarterly commitments.</p>
        <p>Submit your information below and let us know why you want to be an ambassador!</p>
        <form onSubmit={() => console.log("Submitted")}>
          <FormInput
            label="Name"
            type="text"
            required
            onChange={handleChange}
            name="name"
          />
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
          />
          <FormInput
            label="City & State"
            type="text"
            required
            onChange={handleChange}
            name="location"
          />
          <FormInput
            label="Why do you want to be a LADY CRUSH CREW Ambassador?"
            type="text"
            required
            onChange={handleChange}
            name="response"
          />
          <Button type="submit">Submit</Button>
        </form>
      </VolunteerFormContainer>
  );
}

export default VolunteerForm;
