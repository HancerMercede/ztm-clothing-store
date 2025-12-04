import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase";

import { FirebaseError } from "firebase/app";
import FormInput from "../form-input/FormInput";
import "./SignUpForm.styles.scss";
import Button from "../Button/Button";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Passwords does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmedPassword"
          value={confirmedPassword}
        ></FormInput>

        <Button buttonType="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
