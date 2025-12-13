import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import FormInput from "../form-input/FormInput";
import "./SignInForm.styles.scss";
import Button from "../Button/Button";
import {
  createUserDocumentFromAuth,
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/Firebase/firebase";
import { FirebaseError } from "firebase/app";
import { UserContext } from "../../context/User.Context";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("Incorrect password for email");
            break;
          case "auth/user-notfound":
            alert("Incorrect password for email");
            break;
          case "auth/invalid-credential":
            alert("password or email are not correct");
            break;
          default:
            console.log(error);
        }
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button buttonType="submit">Sign In</Button>,
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
